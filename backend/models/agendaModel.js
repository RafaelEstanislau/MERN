const mongoose = require("mongoose")
const agendaSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    vacina:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Vacina"
    },
    data:{
        type: Date,
        required: [true, "Adicione uma data para o agendamento"],
    },
    situacao:{
        type: String,
        required: true,
        enum: ['Agendado', 'Cancelado', 'Realizado'],
        default: 'Agendado'
    },
    dataSituacao:{
        type: Date,
        required: false,
    },
    observacoes:{
        type: String,
        required: false,
    }
    
},
{
    timestamps: true,
})
module.exports = mongoose.model("Agenda", agendaSchema)