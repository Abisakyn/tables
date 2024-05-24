const { DataTypes } = require('sequelize');
const sequelize = require('../db/user_management');
const AppointmentBooking = require ('../models/appointmentbooking')

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idNumber:{
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: 'Users', // Ensure table name is correctly set
    hooks: {
        afterUpdate: async (user, options) => {
            await AppointmentBooking.update(
                { phoneNumber: user.phoneNumber },
                { where: { customerId: user.id } }
            );
        }
    }
});

module.exports = User;
