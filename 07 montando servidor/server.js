const http = require('http'); // Para gerar o servidor

/**
 * @server recebe o método .createServer() que vai criar uma instância de servidor.
 * @req é a requisição que vai recebida
 * @res é a resposta que vai ser manipulada/alterada para retornar à web
 */

const server = http.createServer((req, res) => {
    console.log(req.method); /* Retorna o método da req */
    console.log(req.url); /* Retorna a url da req */
    res.statusCode = 200; /* Devolve o status da req */
    res.end('<h1>Hello World</h1>'); /* Método .end() envia resposta do servidor para o cliente */
});


/**
 * Método .listen() é um método que vai direcionar a chamada do Browser ao servidor em questão.
 * @port primeiro parametro é a porta que vai servir pro servidor. 3000 é porta de desenvolvimento, 8080 é o comumente nos sites.
 * @callbackFunc recebe uma função callback que vai ser executada.
 */
server.listen(3000, () => {
    console.log('Servidor Ativo!');
});