const {initMongoDB,disconnectMongoDB} = require('./conexion');
const {UsuarioModel} = require('./schema');

/* Crear un documento */

const crearUsuario = async (newUsuario) => {
    console.log(`Vamos a crear a ${newUsuario.nombre}`);
    await UsuarioModel.create(newUsuario);
    console.log('Hecho');
}

const main = async () => {
    await initMongoDB();

    /* Creamos un usuario */
    const newUsuario = {
        nombre: 'Juan',
        apellido: 'Cordoba',
        email: 'j@c.com',
        admin:true,
        usuario: 'jcordoba',
        password: 'river123',
        edad:26
    }
    await crearUsuario(newUsuario)

    usuarios = [
        {
            nombre: 'David',
            apellido: 'Cordoba',
            email: 'd@c.com',
            admin:true,
            usuario: 'dcordoba',
            password: 'boca123',
            edad:33
        },
        {
            nombre: 'Lidia',
            apellido: 'Cordoba',
            email: 'l@c.com',
            admin:false,
            usuario: 'lcordoba',
            password: 'artesanias123',
            edad:15
        },
        {
            nombre: 'Hugo',
            apellido: 'Cordoba',
            email: 'h@c.com',
            admin:false,
            usuario: 'hcordoba',
            password: 'doncomedia',
            edad:41
        }
    ]
    
    const creaciones = usuarios.map( user => crearUsuario(user)) // crearusuario devuelve una promesa, entonces voy a tener un array de promesas
    await Promise.all(creaciones) // es una funcion que le pasas un array de promesas y se queda esperando que terminen todas a menos que una falle , conviene usar try and catch porque si falla una cagamos
    await disconnectMongoDB();
}

main();