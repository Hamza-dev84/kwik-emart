
const {DataTypes} = require("sequelize");
const { sequelize } = require("../config/db");

const Store = sequelize.define("Store", {
    store_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Store name cannot be null"
            }
        }
    },

    store_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Store email cannot be null"
            }
        }
    },
    
    store_phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Store phone cannot be null"
            }
        }
    },

    store_description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Store description cannot be null"
            }
        }
    },

    store_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Select at least one store type"
            }
        }
    },

    number_of_locations: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Select at least one location"
            }
        }
    },

    time_zone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Select at least one time zone"
            }
        }
    },

    opening_time: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Opening time cannot be null"
            }
        }
    },

    closing_time: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Closing time cannot be null"
            }
        }
    },

});

module.exports = Store;