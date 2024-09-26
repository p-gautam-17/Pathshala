const express = require('express');
const router = express.Router();
//const { home, register } = require('../controllers/auth-controllers');
const authcontrollers = require('../controllers/auth-controllers');
//const signupSchema = require('../validators/auth-valid');
const validate = require('../middlewares/validate-middleware');
const singupSchema = require('../validators/auth-valid');
//const loginSchema = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth_middleware");

router.route("/").get(authcontrollers.home);

router.route("/register").post(validate(singupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);

router.route("/user").get(authMiddleware,authcontrollers.user);

module.exports = router;