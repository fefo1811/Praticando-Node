import fs from 'fs';

export default function updateFile(text){
    return new Promise ((resolve, reject) => {
        fs.writeFile('./arquivo.txt', text, 'utf-8', (error) => {
            if (error) {
                reject(`Falha na atualização do arquivo: ${error.message}`);
            } else {
                resolve()
            }
        })
    })
}