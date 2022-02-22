const express = require("express")
const cors = require("express")

const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.json([
        {
            "id": "1",
            "title": "Book Review"
        },
        {
            "id": "2",
            "title": "Coding Review"
        },
        {
            "id": "3",
            "title": "Front Review"
        },
    ])
})

app.listen(4000, () => {
    console.log("listening on port 4000")
})