const mongoose = require("mongoose")
const agendaSchema = mongoose.Schema({
    titulo:{
        type: String,
        required: [true, "Adicione o nome da vacina"],
    },
    doses:{
        type: Number,
        required: [true, "Adicione as doses"],
    }
    
},
{
    timestamps: true,
})
module.exports = mongoose.model("Vacina", agendaSchema)