const { DataTypes } = require('sequelize');
const sequelize = require('../db/user_management');

const Profile = sequelize.define('Profile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // Ensure table name matches the User model's table name
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'Profiles' // Ensure table name is correctly set
});

module.exports = Profile;
