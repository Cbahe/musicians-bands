const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
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



module.exports = {
    Band,
    Musician,
    Song
};
