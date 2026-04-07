const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Basic Web Service using Node.js");
});

app.get("/api/data", (req, res) => {
    res.json({
        service: "Node Web Service",
        status: "Active"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});