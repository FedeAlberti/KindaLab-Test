const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./db/config');


// crear servidor express
const app = express();

//bd
dbConnection()

//Cors
app.use(cors());
 
//Directorio publico
app.use( express.static('public') );


//Lectura y parse
app.use( express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));


//escuchar peticiones

app.listen( process.env.PORT , () => {
    console.log(`server running on port: ${ process.env.PORT }`)
});