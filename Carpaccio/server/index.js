const express = require("express")
const utils = require("./functions/utils")

const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get("/id/:name", (req, res) => {
    res.send({ "id": utils.idRepo(req.params.name) })
})

app.post("/bill", (req, res, next) => {
    /* console.log(res.status)
    if(res.status !== 200){
        throw new Error("something broke !");
    } */
    res.send({ "total": utils.price(req.body.quantities, req.body.prices, req.body.country, req.body.discount) });
})

app.listen(3000, () => console.log("Awaiting requests."))