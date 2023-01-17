const {initMongoDB, disconnectMongoDB} = require('./conexion')
const {UsuarioModel} = require('./schema');

const consultar = async ()=> {
    await initMongoDB(); //nos conectamos

    /* const q1 = await UsuarioModel.find(); // te trae todo si no le mandas algo // q1 es un arreglo

    console.log('---Todos los usuarios---');
    console.log(q1);

    const q2 = await UsuarioModel.find({edad: {$gt:33} }) // todos los filtros funcionan aca
    console.log('---Usuarios con find filtro de edad mayor a 33---');
    console.log(q2); */

    const c1 = { edad:{$gte:35}}
    const c2 = {admin:false};

    const q3 = await UsuarioModel.find({
        $and: [c1,c2]
    })
    console.log('Usuarios con admin false y edad mayor o igual que 35');
    console.log(q3);

    const q4 = await UsuarioModel.find({admin:true}).sort({edad:1})//sort para ordenarlos a partir de cierto parametro

    await disconnectMongoDB();
}

consultar();



