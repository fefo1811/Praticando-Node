const path = require('path');
const fs = require('fs');

const arquivos = [
    'arquivo.txt'
]

const caminhoOriginal = './org/';
const caminhoDestino = './obs/';

arquivos.forEach(nomeArquivo => {
    const caminhoArquivoOrigem = path.join(caminhoOriginal, nomeArquivo);
    fs.writeFileSync(caminhoArquivoOrigem, 'Texto e diretório alterados com sucesso!', 'utf-8');;
    const arquivoConteudo = fs.readFileSync(caminhoArquivoOrigem, 'utf-8');
    // const nomeNovo = nomeArquivo.replace('.txt', '') + '_diferente.txt';
    const caminhoArquivoDestino = path.join(caminhoDestino, `${nomeArquivo.replace('.txt', '')}_diferente.txt`);
    fs.writeFileSync(caminhoArquivoDestino, arquivoConteudo, 'utf-8');
    console.log(arquivoConteudo);
    // console.log(nomeNovo);
})