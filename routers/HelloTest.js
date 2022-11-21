const express = require("express");

// create router
const router = express.Router();

// router middleware
router.use((req, res) => {
    res.send("Hello World!");
});

// export router
module.exports = router;
