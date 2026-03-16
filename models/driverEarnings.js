
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const DriverEarnings = sequelize.define("DriverEarnings", {
    agree_terms: {
        type: DataTypes.BOOLEAN, allowNull: false,
        validate: {
            isTrue(value) {
                if (!value) throw new Error("You must agree to the Driver Terms & Conditions");
            }
        }
    },
    consent_background_check: {
        type: DataTypes.BOOLEAN, allowNull: false,
        validate: {
            isTrue(value) {
                if (!value) throw new Error("You must consent to a background check");
            }
        }
    },
    info_accurate: {
        type: DataTypes.BOOLEAN, allowNull: false,
        validate: {
            isTrue(value) {
                if (!value) throw new Error("You must confirm all information is accurate");
            }
        }
    },
    subscribe_updates: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = DriverEarnings;
