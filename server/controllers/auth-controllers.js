const User = require("../models/user_models");
const bcrypt = require("bcryptjs");


const home = async(req, res) => {
    try {
        res.status(200).send("Welcome to our Website");
    } catch (error) {
        res.status(400).send("Page not found");
    }
}

// User Registration logic 

const register = async(req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exist" });

        }
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);
        const userCreate = await User.create({ username, email, phone, password: hash_password });
        res.status(200).json({
            message: "Registration Sucessfull",
            token: await userCreate.generateToken(),
            userId: userCreate._id.toString(),
        });
    } catch (error) {
        // res.status(400).send('Page not found');
        next(error);
    }
}

// user Login Logic

const login = async(req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            res.status(400).json({ message: "invalid Credentials" });

        }
        console.log(userExist);

        // without funtion of compare password you need to comment the funtion 
        // inside user models (comapre the password)
        const IsPaswordValid = await bcrypt.compare(password, userExist.password);
        //  const user = await userExist.comaprePasswod(password);
        if (IsPaswordValid) {
            res.status(200).json({
                message: "Login Sucessfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            })
        } else {
            res.status(401).json({ message: "Invalid Email or Password" });
        }

    } catch (error) {
        res.status(500).json("internal Server Error.");
        // next(error);
    }
}

const user = async (req, res) => {
    try {
      // const userData = await User.find({});
      const userData = req.user;
      console.log(userData);
      return res.status(200).json({ msg: userData });
   // return res.status(200).json({msg:"Hii..."});
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
};

module.exports = { home, register, login,user };