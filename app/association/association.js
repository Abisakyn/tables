const User = require('../models/user');
const Profile = require('../models/profile');
const AppointmentBooking = require('../models/appointmentbooking');

const defineAssociations = () => {
    User.hasOne(Profile, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    Profile.belongsTo(User, {
        foreignKey: 'userId'
    });

    User.hasMany(AppointmentBooking, {
        foreignKey: 'customerId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    AppointmentBooking.belongsTo(User, {
        foreignKey: 'customerId'
    });
};

module.exports = defineAssociations;
