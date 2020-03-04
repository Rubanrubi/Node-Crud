import mongoose from "mongoose";
import env from "config/env";
const config = env.MONGODB;

try {
    // mongodb connection established
    const _uri = `mongodb://${config.host}:${config.port}/${config.db}`;
    const _options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
    mongoose.connect(_uri, _options,(error) => {
        if(error){
            console.error('Error : unable to connect mongodb\n'+error.toString());
        }else{
            console.error(`Mongodb connected successfully`);
        }
    });
} catch (exp) {
    console.log('Exception occurs'+exp);
}

const conn = true;
module.exports = conn;