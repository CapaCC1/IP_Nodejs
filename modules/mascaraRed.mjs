import os from 'os';

export function getMascaraRed(nombreIntefaz){
    const interfazRed = os.networkInterfaces();
    if(interfazRed[nombreIntefaz]){
        const interfaces = interfazRed[nombreIntefaz];
        for(const info of interfaces){
            if(info.family === 'IPv4'){
                return info.netmask;
            }
        }
    }
}