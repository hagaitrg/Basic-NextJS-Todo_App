import mongoose, {Model} from "mongoose"
import dotenv from 'dotenv';

dotenv.config()
const { DATABASE_URL } = process.env

export const connect = async ()=>{
    const conn = await mongoose.connect(DATABASE_URL as string)
    .catch(err=>console.log(err))
    console.log('Mongoose Connection Established')

    const TodoSchema = new mongoose.Schema({
        activity:String,
        description:String,
        done:Boolean,
    })

    const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema)

    return {conn,Todo}
}