import mongoose from "mongoose"
export const connectDB = async()=>{
    const {connection} = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Mongo DB connected: ${connection.host}`)
}