const user = process.env.USERDOMAIN

if ( process.argv[2] === 'web-49'){
    console.log(user)
} else {
    console.log('uhm')
}

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.json({ message: "fahook"})
})

app.get('/', (req, res) => {
    res.json(
    <h1> hello there </h1>
    )
})

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})