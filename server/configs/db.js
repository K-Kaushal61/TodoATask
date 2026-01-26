import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', ()=> console.log("Database Connected"))
        await mongoose.connect(`${process.env.MONGO_URI.replace("<db_password>", process.env.MONGO_PASS)}`);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;