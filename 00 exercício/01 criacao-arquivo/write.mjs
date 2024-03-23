import fs from 'fs';

export default function createFile(text) {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./arquivo.txt', text, 'utf-8', (error) => {
            if (error) {
                reject(`Falha na criação do arquivo: ${error.message}`);
            } else {
                resolve();
            }
        })
    })
}