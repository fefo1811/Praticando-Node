const fs = require('fs');

/**
 * Usando o recurso fs. O recurso fs também trabalha com stream nos arquivos durante a leitura, escrita, etc.
 */
const streamLeitura = fs.createReadStream('arquivo.txt');
// const streamLeitura = fs.createReadStream('eu 4.png');

const buffer = [];

/**
 * O método on serve como um addEventListener do navegador. Evento usado é o data que indica que dados chegaram para ser processados
 */
streamLeitura.on('data', (chunk) => {
    buffer.push(chunk);
    console.log('Um chunk foi armazenado');
})

streamLeitura.on('end', () => {
    console.log('Buffer:\n', buffer);
    const dadosCompletos = Buffer.concat(buffer).toString();
    console.log('Dados lidos:\n', dadosCompletos);
})