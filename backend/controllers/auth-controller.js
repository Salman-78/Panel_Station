const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    const data = req.body;
    // console.log(data);
    res.status(200).json({ message: data });
  } 
  catch (error) {
    res.status(404).send("internal server errorr");
  }
};

const registration = async (req, res) => {
  try {
    const { username, phone, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ message: "Email alread exist" });
    }
    const userCreated = await User.create({ username, email, phone, password });
    res.status(200).json({ msg: "Registration successfull" , token : await userCreated.generateToken(), userId: userCreated._id.toString()});
  } 
  catch (error) {
    // res.status(404).send("internal server errorr");
    next(error)
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({message: "invalid credential"});
    }
    // const isPasswordValid  = await bcrypt.compare(password, userExist.password);
    const isPasswordValid = await userExist.comparePassword(password);
    if(isPasswordValid ){
      res.status(200).json({ msg: "login successfull" , token : await userExist.generateToken(), userId: userExist._id.toString()});
    }
    else{
      res.status(401).json({message: "invalid email or password"});
    }
  } 
  catch (error) {
    next(error)
  }
};

const user = async (req, res)=>{
  try {
    const userData=req.user;
    // console.log(userData)
    // return res.status(200).json({msg: userData})
    return res.status(200).json({ userData });
  } 
  catch (error) {
    console.log(`User route error: ${error}`);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}


module.exports = { home, registration, login, user };











