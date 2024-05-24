const AppointmentBooking = require('../models/appointmentbooking');
const User = require ('../models/user')

exports.bookAppointment = async (req, res) => {

   
            
            const {appointmentId,bookFor,service,date,time,appointmentType,gender,age,idNumber} = req.body;
            const user = await User.findOne({where: {idNumber:idNumber}})
            try {


            // Create a new appointment booking
            const appointment = await AppointmentBooking.create({
                appointmentId,
                bookFor,
                service,
                date,
                time,
                appointmentType,
                fullName:user.name,
                phoneNumber:user.phoneNumber,
                idNumber,
                gender,
                age,
                customerId:user.id
            });
            

        return res.status(201).json({ message: 'Appointment booked successfully', appointment });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
