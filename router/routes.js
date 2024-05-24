const router = require('express').Router();
const { addUser } = require('../app/controllers/add_user');
const { bookAppointment } = require('../app/controllers/create_appointments');
const { deleteUser } = require('../app/controllers/delete_user');
const { updateUser } = require('../app/controllers/update_user');



router.post('/create/user',addUser)
router.post('/book',bookAppointment)
router.delete('/deleteuser/:idNumber',deleteUser)
router.put('/update/:idNumber',updateUser)





module.exports = router;