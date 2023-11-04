import express from 'express';
import { getIpPrivada } from './modules/ipPrivada.mjs';
import { getMascaraRed } from './modules/mascaraRed.mjs';
import { getPuertaEnlace } from './modules/puertaEnlace.mjs';
import { escanearPuertos } from './modules/escanearPuertos.mjs';
import { getIpPublica } from './modules/ipPublica.mjs';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import  path  from 'path';

const app = express();
const puerto = 3000;
const ip = "localhost"

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));//

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(puerto,ip, () => {
    console.log(`Servidor en ejecución en http://${ip}:${puerto}`)
});

app.get('/get-ip-privada',(req,res) => {
    const nombreIntefaz = "Ethernet 3";
    const ipPrivada = getIpPrivada(nombreIntefaz);
    res.send(ipPrivada);
})

app.get('/get-mascara',(req,res) => {
    const nombreIntefaz = "Ethernet 3";
    const mascaraRed = getMascaraRed(nombreIntefaz);
    res.send(mascaraRed);
})

app.get('/get-puerta-enlace',(req,res) => {
    getPuertaEnlace(function(err, gatewayIP) {
        if (!err) {
          console.log('Puerta de enlace: ' + gatewayIP);
          res.send(gatewayIP);
        } else {
          console.error('Error al obtener la puerta de enlace: ' + err);
          res.send(err);
        }
      });
})

app.get('/escanear-puertos',(req,res) => {
    escanearPuertos('90.94.32.97', [21, 22, 23, 25, 80, 110, 123, 443])
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(error => {
      console.error(error);
    });
})

app.get('/get-ip-publica',(req,res) => {
    getIpPublica()
    .then(ip => {
        if (ip) {
            res.send(ip);
            console.log('Tu dirección IP pública es:', ip);
        } else {
            console.log('No se pudo obtener la IP pública.');
        }
    });
})
