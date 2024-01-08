const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
const registerUser = asyncHandler (async(req, res) => {
    const {name, email, password, state, gender} = req.body
    if(!name || !email || !password){
     res.status(400)
     throw new Error("Por favor inclua todos os campos")
    }
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("Usuário já cadastrado")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        state,
        gender
    })
    if(!user){
        res.status(400)
        throw new Error ("Dados de usuário inválidos")
    }
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        state: user.state,
        token: generateToken(user._id)
    })
    
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401);
        throw new Error("Credenciais inválidas");
    }

    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        state: user.state,
        token: generateToken(user._id)
    });
});
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d"
})
}

module.exports ={
    registerUser,
    loginUser,
}