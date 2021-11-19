const express = require("express");
const router = express.Router();
const HomeController = require("../Controllers/homeController");
const SkillsController = require("../Controllers/skillsController");
const ContactController = require("../Controllers/contactController");
const ServiceController = require("../Controllers/serviceController");

router.get("/", HomeController);
router.get("/skill", SkillsController);

router.get("/contact", ContactController);
router.get("/service", ServiceController);

module.exports = router;
