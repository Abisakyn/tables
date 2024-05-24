const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./app/db/user_management');
const defineAssociations = require('./app/association/association');
const User = require('./app/models/user');
const Profile = require('./app/models/profile');
const AppointmentBooking = require('./app/models/appointmentbooking');
const router = require('./router/routes');

const initializeDatabase = async () => {
    try {
        defineAssociations(); // Define associations
        await sequelize.sync({ force: true }); // Use { force: true } with caution in production
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
};

initializeDatabase();



const app = express();

app.use(express.json());

app.use('/api',router)

dotenv.config();

const port =process.env.port

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

