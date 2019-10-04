const express = require('express')
const router = express.Router()

const { getAll, deleteUser, editUser, addUser } = require("../../controllers/user");
router.get("/user", getAll);
router.delete("/user/:id", deleteUser)
router.put('/user/:id', editUser)
router.post('/user', addUser)
module.exports = router;