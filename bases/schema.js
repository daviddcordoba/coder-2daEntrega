const mongoose = require('mongoose');

const usuariosCollection = 'usuario'; // crea la collecion usuario si es que no existe

const UsuarioSchema = new mongoose.Schema(
    {
        nombre:{type: String, require:true, max:100},
        apellido:{type: String, require:true, max:100},
        email:{type: String, require:true, max:100, unique: true},
        admin:{type: Boolean, default: false},
        usuario:{type: String, require:true, max:100},
        password:{type: String, require:true},
        edad:{type: Number, require:true}
    },
    {timestamps: true}//va a crear un campo que sea fecha de creacion y fecha de actualizacion
);

const UsuarioModel = mongoose.model(usuariosCollection,UsuarioSchema);

module.exports = {UsuarioModel}

// con usuariomodel se hacen las operaciones : find create update delete ...