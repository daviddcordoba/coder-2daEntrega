import mongoose from "mongoose";
/* contra: QzvBMJprmsqaraU7 */

const connectionString = 'mongodb+srv://admindavid:QzvBMJprmsqaraU7@cluster0.q8ewe5o.mongodb.net/?retryWrites=true&w=majority'

const initMongoDB = async () => {

    try{
        console.log('CONECTANDO A MI DB');
        await mongoose.connect(connectionString);

        console.log('YA ESTOY CONECTADO');
    }
    catch(error){
        console.log(`Error: ${error}`);
        return error;
    }
}

export default initMongoDB;
