
const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");

const Driver = sequelize.define("Driver", {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "First name are required"
            }
        }
    },

    middle_name: {
        type: DataTypes.STRING,
        allowNull: true
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Last name are required"
            }
        }
    },

    date_of_birth: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Date of Birth are required"
            }
        }
    },

    gender: {
        type: DataTypes.STRING,
        allowNull: true
    },

    nationality: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Nationality cannot be null"
            }
        }
    },

    national_insurance_no: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "National insurance no are required"
            }
        }
    },

    work_rights: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Right to work in UK are required "
            }
        }
    },

    email_address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail:{
                msg: "Please enter a valid email address"
            }
        }
    },

    phone_no: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Phone no cannot be null "
            }
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Password cannot be null "
            }
        }
    },

    street_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Street address cannot be null "
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
                msg: "City cannot be null "
            }
        }
    },

    postcode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Post code cannot be null "
            }
        }
    },

    contact_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Emergency contact name cannot be null"
            }
        }
    },

    relationship: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Emergency contact Relationship cannot be null"
            }
        }
    },

    emergency_phone_number:{
        type: DataTypes.STRING,
        allowNull: false
    },

    profile_photo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Profile Photo are required"
            }
        }
    }

})

module.exports = Driver;