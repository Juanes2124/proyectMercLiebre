const express = require('express');
const app = express();
const path = require ("path");
const publicPath = path.resolve(__dirname, "public");
const PORT = process.env.PORT||3030;
app.use(express.static(publicPath))

app.use('/static', express.static(__dirname + '/public'));

app.get ("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"src/views/home.html"));
});

app.listen(PORT, ()=> {
    console.log("se prendio en el puerto " + PORT)
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "src/views/register.html"));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "src/views/login.html"))
});