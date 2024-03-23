import fs from 'fs';

export default function showFile(){
    return new Promise ((resolve, reject) => {
        fs.readFile('./arquivo.txt', (error, data) => {
            if (error) {
                reject(`Falha na leitura do arquivo ${error.message}`);
            } else {
                console.log(data);
                resolve(data);
            }
        })
    })
}