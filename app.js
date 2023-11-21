const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get(["/", "/index.html"], (req, res) => {
    res.send("Hola mundo");
});

if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => {
        console.log(`La aplicacion esta corriendo en el puerto ${port}`);
    });
}

module.exports = app;