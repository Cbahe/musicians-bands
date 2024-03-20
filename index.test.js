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
        
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})