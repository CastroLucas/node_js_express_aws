const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    return response.json({
        mensagem:"Leeeee"
    }).send(200)
})

app.listen(3333)