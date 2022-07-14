import mongoose, {Model} from "mongoose"
import dotenv from 'dotenv';

dotenv.config()
const { DATABASE_URL } = process.env
const dt = new Date();

export const connect = async ()=>{
    const conn = await mongoose.connect(DATABASE_URL as string)
    .catch(err=>console.log(err))
    console.log('Mongoose Connection Established')

    const TodoSchema = new mongoose.Schema({
        activity:String,
        description:String,
        done:Boolean ,
    },{ timestamps: true })

    // TodoSchema.pre('save', (next)=>{
    //     let year = dt.getFullYear();
    //     let month = dt.toLocaleString('default', { month: 'short' })    
    //     let day = ("0" + dt.getDate()).slice(-2)
    //     let date = year+ " "+month+" "+day
    //     this.created_at = date.toString()
    //     next()
    // })

    const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema)

    return {conn,Todo}
}