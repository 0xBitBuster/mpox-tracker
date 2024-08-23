const express = require("express")
const router = express.Router()

const diseasesController = require("../controllers/diseasesController")

router.get("/monkeypox/ranking", diseasesController.monkeypoxRanking)
router.get("/monkeypox", diseasesController.monkeypox)

module.exports = router