

const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/db");

const Assets = sequelize.define("Assets", {
    store_logo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Store Logo Required"
            }
        }
    },
    banner_image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Banner Image Required"
            }
        }
    },

    business_document: {
        type: DataTypes.STRING,
        allowNull: true
    },

});

module.exports = Assets;