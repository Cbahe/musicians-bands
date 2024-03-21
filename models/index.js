const { Band } = require('./Band')
const { Musician } = require('./Musician')
const { Song } = require("./Song")
// Define associations here
// A Band has many Musicians
Band.hasMany(Musician);
// A Musician belongs to a Band
Musician.belongsTo(Band);
// A Band has many Songs
Band.hasMany(Song);
// A Song belongs to a Band
Song.belongsTo(Band);
// A Musician has many Songs
Musician.hasMany(Song);

Song.hasMany(Band);
Band.belongsTo(Song);


module.exports = {
    Band,
    Musician,
    Song
};
