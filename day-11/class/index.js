import express from "express";

const app = express();

const PORT  = 4500;
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port: ${PORT}`)
});

app.get("/", (req, res)=>{
    res.send("welcome to the home page")
});
app.get("/student/:naam", (req, res)=>{
    const naam = req.params.naam;
    res.send(`welcome to the ${naam} page`)
});
app.get("/admin", (req, res)=>{
    res.send("welcome to the admin page")
});
app.get("/user", (req, res)=>{
    res.send("welcome to the user page")
});
app.get("/editor", (req, res)=>{
    res.send("welcome to the editor page")
});