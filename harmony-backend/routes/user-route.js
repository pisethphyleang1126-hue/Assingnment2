const express = require('express');
const { register, login, users } = require("../controller/user-controller");
const router = express.Router();

// POST /api/users/register
router.post("/register", register);

// POST /api/users/login
router.post('/login', login);

// GET /api/users  (quick sanity check list, remove/protect later)
router.get("/users", users);

module.exports = router;
