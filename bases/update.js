const {initMongoDB,disconnectMongoDB} = require('./conexion');
const {UsuarioModel} = require('./schema');

const updatear = async () => {
    await initMongoDB();

    console.log('Update documento por ID');
    const idDocumento = '638177303469662e045696f5';
    const u1 = await UsuarioModel.findByIdAndUpdate(
        idDocumento,
        {admin: true, edad: 7},
        {new:true} // devuelve el objeto actualizado
    )
    console.log('Update document');
    console.log(u1);

    disconnectMongoDB()
}

updatear()