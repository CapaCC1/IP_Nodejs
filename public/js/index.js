
document.getElementById('btn').addEventListener('click',function(){
    location.reload();
})

document.addEventListener('DOMContentLoaded', () => {
    const ipPrivada = document.getElementById('ip-privada');
    fetch('/get-ip-privada')
        .then(response => response.text())
        .then(data => {
            ipPrivada.textContent = data;
        })
        .catch(error => {
            ipPrivada.textContent = "Error"
        })

    const puertaEnlace = document.getElementById('puerta-enlace');
    fetch('/get-puerta-enlace')
        .then(response => response.text())
        .then(data => {
            puertaEnlace.textContent = data;
        })
        .catch(error => {
            puertaEnlace.textContent = "Sin Internet"
        })

    const mascaraRed = document.getElementById('mascara-red');
    fetch('/get-mascara')
            .then(response => response.text())
            .then(data => {
                mascaraRed.textContent = data;
            })
            .catch(error => {
                mascaraRed.textContent = "Sin Internet"
            })
    
    const puertosAbiertos = document.getElementById('puertos-abiertos');
    fetch('/escanear-puertos')
        .then(response => response.text())
        .then(data => {
            puertosAbiertos.textContent = data;
        })
        .catch(error => {
            puertosAbiertos.textContent = "Sin Internet"            
        })
    
    const ipPublica = document.getElementById('ip-publica');
    fetch('/get-ip-publica')
        .then(response => response.text())
        .then(data => {
            ipPublica.textContent = data;
        })
        .catch(error => {
            ipPublica.textContent = "Sin Internet"               
        })
});