
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const DriverDocument = sequelize.define("DriverDocument", {

    id_type: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    id_expiry_date: { 
        type: DataTypes.DATEONLY, 
        allowNull: false 
    },

    id_front: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    id_back: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    license_no: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },

    license_category: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    dvla_check_code: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    license_issue_date: { 
        type: DataTypes.DATEONLY, 
        allowNull: false 
    },

    license_expiry_date: { 
        type: DataTypes.DATEONLY, 
        allowNull: false 
    },

    license_front: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    license_back: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    insurer_name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    policy_no: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    policy_start_date: { 
        type: DataTypes.DATEONLY, 
        allowNull: false 
    },

    policy_expiry_date: { 
        type: DataTypes.DATEONLY, 
        allowNull: false 
    },

    insurance_certificate: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },

    bank_name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    account_holder_name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    sort_code: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    account_no: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    bank_statement_upload: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },

    right_to_work_document: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },

});

module.exports = DriverDocument;