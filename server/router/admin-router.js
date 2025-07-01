const express=require("express");
//const {getAllusers,getAllContacts} = require("../controllers/admin-controller");  //ctrl+space
const adminController = require("../controllers/admin-controller");
const adminMiddleware=require("../middlewares/admin-middleware")


//to verification and authorization

const authMiddleware=require("../middlewares/auth-middleware")

const router=express.Router();

router.route('/users').get(authMiddleware,adminMiddleware,adminController.getAllusers);

router.route('/users/update/:id').patch(authMiddleware,adminMiddleware,adminController.updateUserById);
// to edit 
router.route("/users/:id").get(authMiddleware,adminMiddleware,adminController.getUserById)

router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware,adminController.deleteUserById)


router.route('/contacts').get(adminController.getAllContacts)
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware,adminController.deleteContactById)


module.exports=router;