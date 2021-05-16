const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/lucas', (request, response)=>{
    return response.json({
        lucas: "muito bem jovem"
    }).send(200)
})

app.get('/', (request, response)=>{
    return response.json({
        mensagem:"Le linda"
    }).send(200)
})

app.listen(3333)