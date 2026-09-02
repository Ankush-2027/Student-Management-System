const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Student API is working"
    });
});

module.exports = router;