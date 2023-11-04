import axios from "axios";

export async function getIpPublica(){
    try{
        const respuesta = await axios.get('https://api64.ipify.org?format=json');
        const ipData = respuesta.data;
        const ipPublica = ipData.ip;
        return ipPublica
    }catch(error){
        return 'Sin Internet'
    }
}