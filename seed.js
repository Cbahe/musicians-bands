const { Band, Musician, Song } = require('./models');

const bands = [
    {name: 'The Beatles', genre: 'Rock'},
    {name: 'Mobb Deep', genre: 'Hip-Hop'},
    {name: 'Led Zeppelin', genre: 'Rock'},
    {name: 'TV Girl', genre: 'Indie Pop'}
];

const musicians = [
    {name: 'Yo-Yo Ma', instrument: 'Cello'},
    {name: 'John Lennon', instrument: 'Guitar'},
    {name: 'Robert Plant', instrument: 'Vocals'},
    {name: 'Havoc', instrument: 'Rapper'},
    {name: 'Meg White', instrument: 'Drums'},
];

const songs = [
    {title: 'Yesterday', year: 1965},
    {title: 'Shook Ones Pt. II', year: 1995},
    {title: 'Stairway to Heaven', year: 1971},
    {title: 'Birds Don\'t Sing', year: 2014}
];

const seed = async () => {
    await Band.bulkCreate(bands);
    await Musician.bulkCreate(musicians);
    await Song.bulkCreate(songs);
}

seed().catch((error) => {
    console.error(error);
    proccess.exit(1);
});