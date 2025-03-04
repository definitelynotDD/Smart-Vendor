import mongoose from 'mongoose';


export const Connection = async (username, password) => {
    const URL = 'mongodb+srv://${username}:${password}@ecommerce-web.f8pky.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web';
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true,useNewUrlParser: true, useFindAndModify: false })
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error while connecting with the database  ', error.message);
    }
}

export default Connection;