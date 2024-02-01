const express = require("express")
const router = express.Router()
const {getVacinas, registerVacina, getVacina} = require("../controllers/vacinaController")

const {protect} = require("../middleware/authMiddleware")

router.route("/").get(protect, getVacinas).post(protect, registerVacina)
router.route("/:id").get(protect, getVacina)
module.exports = router