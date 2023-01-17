const {initMongoDB,disconnectMongoDB} = require('./conexion');
const {UsuarioModel} = require('./schema');

const borrar = async () => {
    await initMongoDB();

    console.log('Delete documento por id');
    const idDocumento = '6382219c2a59a20f972a6fea';
    const u1 = await UsuarioModel.findByIdAndDelete(idDocumento);

    console.log('Deleted document');
    console.log(u1);

    disconnectMongoDB();
}

borrar()