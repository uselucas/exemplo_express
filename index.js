const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())
app.get('/', (request, response) => {
    response.send('Estoy aqui');
})

app.post('/soma', (request, response) => {
    const body = request.body;
    const numero1 = body.numero1;
    const numero2 = body.numero2;
    const resultado = {
        resultado: numero1 + numero2
    }
    response.send(resultado);
})

app.get('/noticias', (request, response) => {
    const noticia = {
        id: 1,
        texto: "festa da linguiça",
        autor: "Top FM"
    }
    response.send(noticia);
})

app.get('/noticias/seara', (request, response) => {
    response.send('página de noticias de seara');
})

app.listen(port, () => {
    console.log("servidor iniciado na porta" + port)
})