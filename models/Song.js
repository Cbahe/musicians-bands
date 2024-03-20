const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
let Song;
class Song extends Model {};
Band.init({
    title :DataTypes.STRING,
    year:DataTypes.NUMBER,
    length: DataTypes.NUMBER
},{
    sequelize: db,
    modelName: "Song"
})

module.exports = {
    Song
};