const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const Agenda = require("../models/agendaModel")

const getAgendas = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user.id)
        if(!user){
            res.status(401)
            throw new Error ("Usuário não encontrado")
        }
    
    const agendas = await Agenda.find({user: req.user.id})
    res.status(200).json(agendas)
})

const getAgenda = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user.id)
        if(!user){
            res.status(401)
            throw new Error ("Usuário não encontrado")
        }
    
    const agenda = await Agenda.findById(req.params.id)
    if(!agenda){
        res.status(404)
        throw new Error ("Agenda não encontrada")
    }
    if(agenda.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("Não autorizado")
    }
    res.status(200).json(agenda)
})

const createAgendas = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error ("Usuário não encontrado")
    }
    const agenda = await Agenda.create({
        user: req.user.id,
        situacao: "Agendado",
        data,

        
    })
    res.status(201).json(agenda)
})

const updateAgenda = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user.id)
        if(!user){
            res.status(401)
            throw new Error ("Usuário não encontrado")
        }
    const agenda = await Agenda.findById(req.params.id)
    if(!agenda){
        res.status(404)
        throw new Error ("Agenda não encontrada")
    }
    if(agenda.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("Não autorizado")
    }
    const updatedAgenda = await Agenda.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedAgenda)
})

const deleteAgenda = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user.id)
        if(!user){
            res.status(401)
            throw new Error ("Usuário não encontrado")
        }
    const agenda = await Agenda.findById(req.params.id)
    if(!agenda){
        res.status(404)
        throw new Error ("Agenda não encontrada")
    }
    if(agenda.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("Não autorizado")
    }
    await agenda.remove()
    res.status(200).json({success: true})
})

module.exports ={
    getAgendas,
    getAgenda,
    createAgendas,
    updateAgenda,
    deleteAgenda
}