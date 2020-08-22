const mongoose = require('mongoose');


const dbConnection = async() =>{

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex :true
        });
        console.log('db Up');
    } catch (error) {

        throw new Error('Error on BD')
    }

}

module.exports = {
    dbConnection
}
