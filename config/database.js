// the purpose of this file is to connect our server to the database

const mongoose = require('mongoose');
require('dotenv').config();


// we will call this function to connect to the database
const dbConnect = () => {

    mongoose.connect( process.env.DATABASE_URL , {

        useNewUrlParser : true,
        useUnifiedTopology : true,
    } )
    .then( () => console.log( "Db connection successful" ) )
    .catch( ( error ) => {
        console.log( "Db connection unsuccessful" );
        console.log( error.message );
        process.exit(1);
    } )
}

module.exports = dbConnect;