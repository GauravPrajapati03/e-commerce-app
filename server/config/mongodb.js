import mongoose from 'mongoose';


const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
            .then((conn) => {
                console.log(`MongoDB connected: ${conn.connection.host}`);
            }).catch((err) => {
                console.error(`MongoDB connection error: ${err.message}`);
            });
    }
    catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

export default connectToDB;