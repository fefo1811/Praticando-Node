import fs from 'fs';

export default function deleteFile() {
    return new Promise ((resolve, reject) => {
        fs.unlinkSync('./arquivo.txt', (error) => {
            if (error) {
                reject(`Falha na exclusão de arquivos: ${error.message}`);
            } else {
                console.log('Arquivo excluído com sucesso.')
                resolve();
            }
        });
    })
}