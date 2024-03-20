const { Sequelize, sequelize } = require('../db');

// TODO - define the Band model
const Band = sequelize.define('Band', {
    name: {
        type: Sequelize.STRING,
        genre: Sequelize.STRING
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