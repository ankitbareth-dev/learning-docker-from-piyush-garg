import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.json({message: "Hey, I Am node Application with docker"})
})

app.listen(PORT,()=> `server is running on port http://localhost:${PORT}`)