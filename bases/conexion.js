const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/ecommerce';

const initMongoDB = async () =>{
    try{
        console.log('Conectado a mi Db');
        await mongoose.connect(connectionString);
        console.log('Ya estoy conectado');
    }
    catch(error){
        console.log(`Error: ${error}`);
        return error;
    }
}

const disconnectMongoDB = async () =>{
    try{
        console.log('Deconectado de mi Db');
        await mongoose.disconnect();
        console.log('Ya estoy desconectado');
    }
    catch(error){
        console.log(`Error: ${error}`);
        return error;
    }
}

module.exports = {initMongoDB,disconnectMongoDB}