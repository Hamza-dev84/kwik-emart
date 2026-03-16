
const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/db");

const DriverVehicle = sequelize.define("DriverVehicle", {
    vehicle_type: {
        type: DataTypes.ENUM("Car", "Motorbike/Scooter", "Bicycle/E-Bike", "Cargo Van"),
        allowNull: false
    },

    make: {
        type: DataTypes.STRING,
        allowNull: false
    },

    model: {
        type: DataTypes.STRING,
        allowNull: false
    },

    year: {
        type: DataTypes.STRING,
        allowNull: false
    },

    colour: {
        type: DataTypes.STRING,
        allowNull: true
    },

    registration_plate: {
        type: DataTypes.STRING,
        allowNull: false
    },

    engine_size: {
        type: DataTypes.STRING,
        allowNull: true
    },

    fuel_type: {
        type: DataTypes.ENUM("Petrol", "Diesel", "Electric", "Hybrid", "N/A (Bicycle)"),
        allowNull: true
    },

    have_delivery_bag: {
        type: DataTypes.STRING,
        allowNull: false
    },

    smartphone_os: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = DriverVehicle;