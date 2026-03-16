
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const DriverAvailability = sequelize.define("DriverAvailability", {
    selected_day: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    
    start_time: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    finish_time: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    hours_per_week: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },

    employment_type: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    primary_delivery_area: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    max_delivery_radius: { 
        type: DataTypes.INTEGER, 
        allowNull: true 
    },

    willing_to_cover_additional_areas: { 
        type: DataTypes.BOOLEAN, 
        defaultValue: false 
    },

    previous_delivery_experience: { 
        type: DataTypes.BOOLEAN, 
        defaultValue: true 
    },

    platforms_worked_on_before: { 
        type: DataTypes.STRING, 
        allowNull: true 
    }, 

    additional_information: { 
        type: DataTypes.TEXT, 
        allowNull: true 
    },

});

module.exports = DriverAvailability;