
const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/db");

const Pricing = sequelize.define("Pricing", {
    termsAccepted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,  
    validate: {
        isTrue(value) {
            if (!value) {
                throw new Error("You must accept the terms and conditions");
            }
        }
    }
},
subscribeUpdates: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false 
}
});

module.exports = Pricing;