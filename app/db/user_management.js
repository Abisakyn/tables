const { Sequelize } = require('sequelize');

// Database connection configuration
const sequelize = new Sequelize('user_managements', 'teleafyabackend', 'teleafyabackend', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Database synchronized successfully');
    testConnection();
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

module.exports = sequelize;
