import os from 'os';
import network from 'network';

export function getPuertaEnlace(callback) {
    network.get_gateway_ip(function(err, ip) {
      if (!err) {
        callback(null, ip);
      } else {
        callback(err, null);
      }
    });
  }