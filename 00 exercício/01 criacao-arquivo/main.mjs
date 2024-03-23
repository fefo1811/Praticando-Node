import createFile from "./write.mjs";
import showFile from "./read.mjs";
import updateFile from "./update.mjs";
import deleteFile from "./unlike.mjs";


async function start() {
    await createFile('Conteúdo Inicial do arquivo. \n Criado com o módulo fs do Node.js');
    await showFile();
    console.log('---------------');
    await updateFile('Conteúdo modificado');
    await showFile();
    console.log('---------------');
    await deleteFile();
    
}

start();