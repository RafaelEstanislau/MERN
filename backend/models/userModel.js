const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Adicione um nome"]
    },
    email:{
        type: String,
        required: [true, "Adicione um email"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Adicione uma senha"],
    },
    gender:{
        type: String,
        required: [true, "Adicione o gênero"],
    },
    state:{
        type: String,
        required: [true, "Adicione o código UF"],
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },
    
    allergies:{
        type: String,
        required: false,
    },
},
{
    timestamps: true,
})
module.exports = mongoose.model("User", userSchema)