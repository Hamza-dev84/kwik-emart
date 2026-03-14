
const {DataTypes} = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define("User", {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notNull: {
                msg: "first_name cannot be null"
            }
        }
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notNull: {
                msg: "last_name cannot be null"
            }
        }
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Please Enter a valid email address"
            }
        }
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Phone_no cannot be null"
            }
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Password cannot be null"
            },
            len: {
                args: [8],
                msg: "Password must be at least 8 characters long"
            }
        }
    },

    profile_photo: {
        type: DataTypes.STRING,
        allowNull: true
    },

    street_address: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notNull: {
                msg: "Street address cannot be null"
            }
        }
    },

    flat_no: {
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
                msg: "Postal Code cannot be null"
            }
        }
    }
});

module.exports = User;