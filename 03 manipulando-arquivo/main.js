const fs = require('node:fs');

/**
 * Escrevendo um arquivo de forma síncrona. Se o arquivo já existir, o script sobreescreve o arquivo
 */

// try {
//     fs.writeFileSync('./arquivo.txt', 'Olá mundo', 'utf-8');
//     console.log('arquivo criado com sucesso');
// } catch (e) {
//     console.log("Erro ao escrever o arquivo: " + e.message);
// }

/**
 * Lendo um arquivo de forma síncrona. Quando usado de forma síncrona, é possível armazenar o texto do arquivo dentro de uma variável
 */

// try {
//     const data = fs.readFileSync('./arquivo-teste.txt', 'utf-8');
//     console.log(data);
// } catch (error) {
//     console.log('Erro ao ler o arquivo: ' + error.message);
// }



/**
 * Escrevendo arquivo de forma assíncrona.
 */

// const content = "Conteúdo do novo arquivo assíncrono";
// fs.writeFile('./arquivo-teste.txt', content, 'utf-8', (error) => {
//     if(error) {
//         console.log('Erro ao ler o arquivo: ' + error.message);
//         return;
//     }

//     console.log('Arquivo criado com sucesso de forma assíncrona');
// })

/**
 * Lendo um arquivo de forma assíncrona.
 */


const existsFile = fs.existsSync('arquivo-teste.txt');

if(existsFile) {
    fs.readFile('./arquivo-teste.txt', 'utf-8', (error, data) => {
        if (error) {
            console.log('Erro ao ler o arquivo: ' + error.message);
            return;
        }
    
        const entries = data.split(',');
        console.log(entries);
        entries.forEach((entry) => {
            console.log(entry);
        })
    })
} else {
    console.log('O arquivo não existe');
}