const { DataTypes } = require('sequelize');
const sequelize = require('../db/user_management');

const AppointmentBooking = sequelize.define('AppointmentBooking', {
    appointmentId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bookFor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    service: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    time: {
        type: DataTypes.STRING,
        allowNull: true
    },
    appointmentType: {
       type: DataTypes.ENUM('Virtual', 'Physical'),
       allowNull: false
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    idNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Pending', 'cancelled', 'approved', 'completed'),
        defaultValue: 'Pending'
    },
    paymentStatus: {
        type: DataTypes.ENUM('Paid', 'Unpaid'),
        defaultValue: 'Unpaid'
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'AppointmentBookings'
});

module.exports = AppointmentBooking;
