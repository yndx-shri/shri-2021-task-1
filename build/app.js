const express = require('express')

const PORT = 3000
const app = express()

app.use(express.static(__dirname))

app.get("", (req, res) => {
    res.sendFile('index.html',  { root: __dirname });
})

app.listen(PORT, () => {
    console.log(`Express app listening on localhost:${PORT}`)
})
