const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/flashcards.html"));
});

router.get("/form", (req, res)=>{
    res.sendFile(path.join(__dirname,"../public/form.html"));
})

module.exports = router;