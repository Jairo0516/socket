import Server from "./clases/server";
import {SERVER_PORT} from "./global/enviroment";
import {router} from "./routes/routes";
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();


//CONIGURACION BODY PARSER
server.app.use(bodyParser.urlencoded({extended:true}));
//POR POST A JSON
server.app.use(bodyParser.json());


server.app.use( cors({origin:true, credentials:true}) );

//RUTAS
server.app.use('/', router);


server.star(()=>{
   console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`)
});
