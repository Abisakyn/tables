const User = require('../models/user');

exports.addUser = async (req, res) => {
    try {
        // Assuming req.body contains { "name": "John Doe" }
        const { name, phoneNumber, idNumber} = req.body;

        // Create a new user with the provided name
        const user = await User.create({ name , phoneNumber, idNumber });

        // Save the user to the database
        await user.save();

        return res.status(201).json({ message: "User created successfully", user });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
