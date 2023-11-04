import nodePortScanner from "node-port-scanner";

export async function escanearPuertos(host,ports) {
    return nodePortScanner(host, ports)
    .then(results => {
      if (results.ports.open.length > 0) {
        return results.ports.open.join(', ');
      } else {
        return "Sin puertos abiertos";
      }
    })
    .catch(error => {
      return `Error: ${error}`;
    });
}

