const { Sequelize, sequelize } = require('../db');

// TODO - define the Band model
const Band = sequelize.define('Band', {
        name: Sequelize.STRING,
        genre: Sequelize.STRING,
        songCount: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
}, {
    instanceMethods: {
        toString() {
            return `Band: ${this.name} Genre: ${this.genre}`;
        },
    },
});
module.exports = {
    Band
};