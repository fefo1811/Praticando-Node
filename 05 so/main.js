const os = require('os');

const platform = os.platform();
console.log(`Plataforma do SO: ${platform}`);

const arch = os.arch();
console.log(`Arquitetura do SO: ${arch}`);

const cpus = os.cpus();
console.log(`Informações da CPU: ${cpus[0]}`);

const memory = os.freemem();
console.log(`Total de memória do PC: ${memory / 1024 / 1024 / 1024} GB`);