const express = require("express")
const router = express.Router()
const {getAgendas, getAgenda, createAgendas, deleteAgenda, updateAgenda} = require("../controllers/agendaController")

const {protect} = require("../middleware/authMiddleware")

router.route("/").get(protect, getAgendas).post(protect, createAgendas)
router.route("/:id").get(protect, getAgenda).delete(protect, deleteAgenda).put(protect, updateAgenda)
module.exports = router