const User =require('../models/user')

exports.deleteUser = async (req,res)=>{
    const {idNumber} = req.params

    try{
        const user = await User.findOne({where: {idNumber:idNumber}})

        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        user.destroy();
        return res.status(200).json({ message: "User deleted successfully" });
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}