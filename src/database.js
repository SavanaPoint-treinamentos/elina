import mongoose from 'mongoose';


const connectionDatabase = async () => {
   await mongoose.connect("mongodb://localhost/elina")
    console.log("Database is connected")
}

export { connectionDatabase }