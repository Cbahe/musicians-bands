const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

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
        expect(testSong.name).toBe('Even Flow');
        expect(testSong.year).toBe('1991');
        expect(testSong.length).toBe('04:53');
    })

    test('can update a Band', async () => {
        const updatedBand = await Band.update({
            name: 'Sade',
            genre: 'Quiet Storm'
        });
        expect(updatedBand.name).toBe('Sade');
        expect(updatedBand.genre).toBe('Quiet Storm');
    })

    test('can update a Musician', async () => {
        const updatedMusician = await Musician.update({
            name: 'Paul Denman',
            instrument: 'bass guitar'
        });
        expect(updatedMusician.name).toBe('Paul Denman');
        expect(updatedMusician.instrument).toBe('bass guitar');
    })

    test('can update a Song', async () => {
        const updatedSong = await Song.update({
            name: 'The Sweetest Taboo',
            year: '1985',
            length: '04:37'
        })
        expect(updatedSong.name).toBe('The Sweetest Taboo');
        expect(updatedSong.year).toBe('1985');
        expect(updatedSong.length).toBe('04:37');
    })

    test('can delete a Band', async () => {
        const foundBand = Band.findbyPk(1);
        await foundBand.destroy();
        expect(Band.findbyPk(1)).toBe(null);
    })

    test('can delete a Musician', async () => {
        const foundMusician = Musician.findbyPk(1);
        await foundMusician.destroy();
        expect(Musician.findbyPk(1)).toBe(null);
    })

    test('can delete a Song', async () => {
        const foundSong = Song.findbyPk(1);
        await foundSong.destroy();
        expect(Song.findbyPk(1)).toBe(null);
    })
})