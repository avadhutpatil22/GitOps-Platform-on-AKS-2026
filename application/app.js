const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    res.send('Enterprise GitOps Application Running')
})

app.listen(3000)
