import initMongoDB from './services/database.js';
import server from './services/server.js'
import 'dotenv/config';
const init = async () => {
    await initMongoDB();
    const puerto = 8080;

    server.listen(puerto, () => console.log(`SERVER UP ON PORT ${puerto}`))
}

init();