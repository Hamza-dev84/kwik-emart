
const {DataTypes} = require("sequelize");
const { sequelize } = require("../config/db");

const Location = sequelize.define("Location", {
    street_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Street address cannot be null"
            }
        }
    },

    area: {
        type: DataTypes.STRING,
        allowNull: true
    },

    city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "City cannot be null"
            }
        }
    },

    postal_code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Postal code cannot be null"
            }
        }
    },

    latitue: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    longitude: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    
});


module.exports = Location;