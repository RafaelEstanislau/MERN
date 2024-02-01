const asyncHandler = require("express-async-handler")
const Vacina = require("../models/vacinaModel")

// const registerVacina = asyncHandler (async(req, res) => {
//     console.log(req.body);
//     const vacinaData = req.body
    
//     if(!vacinaData.titulo || !vacinaData.doses){
//      res.status(400)
//      throw new Error("Por favor inclua todos os campos")
//     }
//     const vacina = await Vacina.create({
//         titulo,
//         doses,
//     })
//     if(!vacina){
//         res.status(400)
//         throw new Error ("Dados de vacina inválidos")
//     }
//     res.status(201).json({
//         _id: vacina._id,
//         titulo: vacina.titulo,
//         doses: vacina.doses,
//     })
    
// })


const registerVacina = asyncHandler(async (req, res) => {
    const vacinaData  = req.body.vacinaData
    console.log(vacinaData);
    const teste = {
        titulo: vacinaData.titulo,
        doses: vacinaData.doses,
    }
    console.log(teste);
    const vacina = await Vacina.create({
        titulo: vacinaData.titulo,
        doses: vacinaData.doses,
    })
    console.log(vacina);
    res.status(201).json(vacina)
})
const getVacina = asyncHandler(async (req, res) => {

    const vacina = await Vacina.findById(req.params.id)
    if(!vacina){
        res.status(404)
        throw new Error ("Vacina não encontrada")
    }
    
    res.status(200).json(vacina)
})

const getVacinas = asyncHandler(async (req, res) => {      
    const vacinas = await Vacina.find({})
    res.status(200).json(vacinas)
})

module.exports ={
    registerVacina,
    getVacinas,
    getVacina
}