const User = require('../models/user')


exports.updateUser = async (req, res) => {
    const { idNumber } = req.params;
    const { name, phoneNumber } = req.body;

    try {
       
        const user = await User.findOne({ where: { idNumber :idNumber} });

        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        
        user.name = name || user.name;
        user.phoneNumber = phoneNumber || user.phoneNumber;

        
        await user.save();

        
        return res.status(200).json({ message: "User updated successfully", user });
    } catch (err) {
        
        return res.status(500).json({ message: err.message });
    }
};