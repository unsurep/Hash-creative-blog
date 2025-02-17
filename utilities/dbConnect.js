import mongoose from "mongoose";

// track connection globally
let isConnected = globalThis.isConnected || false;

export const dbConnect = async ()=>{
    mongoose.set('strictQuery', true);

    // check if mongoose has been defined
    if(!process.env.MONGODB_URL) {
        console.error ('❌ MONGODB-URL is not set')
        return;
    }

    // check if db is already connected
    if (isConnected) {
        console.log ('Mongodb is already connected')
        return;
    }

    try {
        // establish db connection
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // database should be connected by now if everything goes well

        isConnected=true;
        globalThis.isConnected = true;
        console.log('✅ Mongodb connected successfully')

    } catch (error) {
        console.error('❌ MongoDB connection error', error)
        
    }

}