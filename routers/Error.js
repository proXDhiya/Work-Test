const express = require("express");

// create router
const router = express.Router();

// router middleware
router.use((req, res) => {
    res.status(404).send("Page not found!");
});

// export router
module.exports = router;
