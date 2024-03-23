const os = require('os');
const fs = require('fs');
const path = require('path');

/**
 * Mapeanndo o retorno do @sistema_operacional 
 */
const mapa_sysOs = {
    'win32': 'Windows',
    'linux': 'Linux',
    'darwin': 'MacOS',
    'freebsd': 'FreeBSD'
}

/**
 * Função que fará a impressão das informações do SO no log
 */
function printLog() {
    const sistema_operacional = mapa_sysOs[os.platform()];
    const arquitetura = os.arch();
    const cpus = os.cpus()[0].model;

    // const uptime = os.uptime(); // Tempo de atividade do Sistema em segundos
    const uptimeDays = Math.floor(os.uptime() / 60/  60 / 24);
    const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 20;

    const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60);
    const uptimeHoursInSeconds = uptimeHours * 60 * 60;

    const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60);
    const uptimeMinsInSeconds = uptimeMins * 60;

    const uptimeSecs = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds));
    const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`;

    console.clear();
    console.log('DETALHES DO SISTEMA');
    console.log(`Sistema Operacional: ${sistema_operacional}`);
    console.log(`Arquitetura: ${arquitetura}`);
    console.log(`Modelo do Processador: ${cpus}`);
    console.log(`Tempo de Atividade do Sistema: ${uptime}`);
}

setInterval(() => {
    printLog();
}, 1000);