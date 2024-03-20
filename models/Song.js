const {Sequelize, sequelize } = require('../db');

// TODO - define the Song model
const Song = sequelize.define('Song', {
        title: Sequelize.STRING,
        year: Sequelize.STRING,
        length: Sequelize.STRING
}, { 
    instanceMethods: {
        toMinutes() {
            return this.duration / 60;
        },
    },
    classMethods: {
        async getLongestSong() {
            const longestSong = await this.findOne({
                order: [['length', 'DESC']]
            });
            return longestSong;
        },  
    },
});

module.exports = {
    Song
};