import express from 'express'
const PORT = 3000
const app = express()

//List of allowed requests:

app.get('/hello', (req,res) => {
    res.send('Hello there!')
})

app.get('/test', (req,res) => {
    res.send("It's working!:D")
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`) //template literal, concatenation could be used though
})
