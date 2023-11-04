import os from 'os';

export function getIpPrivada(nombreInterfaz) {
    const interfazRed = os.networkInterfaces();
    
    // Verifica si la interfaz con el nombre proporcionado existe
    if (interfazRed[nombreInterfaz]) {
      const interfaces = interfazRed[nombreInterfaz];
      for (const info of interfaces) {
        if (!info.internal && info.family === 'IPv4') {
          console.log(`Dirección IP privada de ${nombreInterfaz}: ${info.address}`);
          return info.address;
        }
      }
    }
    console.log(`No se encontró una dirección IP privada en ${nombreInterfaz}.`);
    return null;
  }
  