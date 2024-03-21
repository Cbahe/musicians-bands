const { sequelize } = require('../db');
//const { Band, Musician, Song } = require('./index')
const { Band, Musician, Song } = require('.')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const testBand = await Band.create({name: 'Pearl Jam', genre: 'Grunge'});
        expect(testBand.name).toBe('Pearl Jam');
        expect(testBand.genre).toBe('Grunge');
    })

    test('can create a Musician', async () => {
        const testMusician = await Musician.create({name: 'Eddie Vedder' , instrument: 'lead vocals'});
        expect(testMusician.name).toBe('Eddie Vedder');
        expect(testMusician.instrument).toBe('lead vocals');
    })

    test('can create a Song', async () => {
        const testSong = await Song.create({title: 'Even Flow', year: '1991', length: '04:53'});
        expect(testSong.title).toBe('Even Flow');
        expect(testSong.year).toBe('1991');
        expect(testSong.length).toBe('04:53');
    })

    test('can update a Band', async () => {
        const testBand = await Band.create({name: 'Pearl Jam', genre: 'Grunge'});
        await Band.update({name: 'Sade', genre: 'Quiet Storm'}, {where: {id: testBand.id}});
        const updatedBand = await Band.findByPk(testBand.id);
        expect(updatedBand.name).toBe('Sade');
        expect(updatedBand.genre).toBe('Quiet Storm');
    })

    test('can update a Musician', async () => {
        const testMusician = await Musician.create({name: 'Eddie Vedder' , instrument: 'lead vocals'});
        await Musician.update({name: 'Paul Denman', instrument: 'bass guitar'}, {where: {id: testMusician.id}});
        const updatedMusician = await Musician.findByPk(testMusician.id);
        expect(updatedMusician.name).toBe('Paul Denman');
        expect(updatedMusician.instrument).toBe('bass guitar');
    })

    test('can update a Song', async () => {
        const testSong = await Song.create({title: 'Even Flow', year: '1991', length: '04:53'});
        await Song.update({title: 'The Sweetest Taboo', year: '1985', length: '04:37'}, {where: {id: testSong.id}});
        const updatedSong = await Song.findByPk(testSong.id);
        expect(updatedSong.title).toBe('The Sweetest Taboo');
        expect(updatedSong.year).toBe('1985');
        expect(updatedSong.length).toBe('04:37');
    })

    test('can delete a Band', async () => {
        const testBand = await Band.create({name: 'Pearl Jam', genre: 'Grunge'});
        await testBand.destroy();
        const foundBand = await Band.findByPk(testBand.id);
        expect(foundBand).toBeNull();
    })

    test('can delete a Musician', async () => {
        const testMusician = await Musician.create({name: 'Eddie Vedder' , instrument: 'lead vocals'});
        await testMusician.destroy();
        const foundMusician = await Musician.findByPk(testMusician.id);
        expect(foundMusician).toBeNull();
    })

    test('can delete a Song', async () => {
        const testSong = await Song.create({title: 'Even Flow', year: '1991', length: '04:53'});
        await testSong.destroy();
        const foundSong = await Song.findByPk(testSong.id);
        expect(foundSong).toBeNull();
    })

    test('can increment and decrement properly', async () => {
        const testBand = await Band.create({name: 'The Beatles', genre: 'Rock', songCount: 0});
        await testBand.increment('songCount');
        await testBand.reload();
        expect(testBand.songCount).toBe(1);
        await testBand.decrement('songCount');
        await testBand.reload();
        expect(testBand.songCount).toBe(0);
    })

    test('Song and Musician have a one-to-many relationship', async () => {
        const musician = await Musician.findOne({name: 'John Lennon', instrument: 'vocals'});
        const song = await Song.create({title: 'Imagine', year: '1971', length: '03:01'});
        await musician.addSong(song);
        const songs = await musician.getSongs();
        expect(songs.length).toBe(1);
    })

    it('adds multiple musicians to a band', async () => {
        const band = await Band.create({name: 'The Beatles', genre: 'Rock'});
        const musician1 = await Musician.create({name: 'John Lennon', instrument: 'vocals'});
        const musician2 = await Musician.create({name: 'Paul McCartney', instrument: 'bass'});
        await band.addMusicians([musician1, musician2]);
        const musicians = await band.getMusicians();
        expect(musicians.length).toBe(2);
    })

    it('adds multiple songs to a band', async () => {
        const band = await Band.create({name: 'The Beatles', genre: 'Rock'});
        const song1 = await Song.create({title: 'Imagine', year: '1971', length: '03:01'});
        const song2 = await Song.create({title: 'Hey Jude', year: '1968', length: '07:11'});
        await band.addSongs([song1, song2]);
        const songs = await band.getSongs();
        expect(songs.length).toBe(2);
    })
});