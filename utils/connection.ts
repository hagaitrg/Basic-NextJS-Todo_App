import mongoose, {Model} from "mongoose"
import dotenv from 'dotenv';

dotenv.config()
const { DATABASE_URL } = process.env
<<<<<<< HEAD
=======
const dt = new Date();
>>>>>>> f619e65f18e244bfbc1bce2b320ef47cb773e909

export const connect = async ()=>{
    const conn = await mongoose.connect(DATABASE_URL as string)
    .catch(err=>console.log(err))
    console.log('Mongoose Connection Established')

    const TodoSchema = new mongoose.Schema({
        activity:String,
        description:String,
<<<<<<< HEAD
        done:Boolean,
    })
=======
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
>>>>>>> f619e65f18e244bfbc1bce2b320ef47cb773e909

    const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema)

    return {conn,Todo}
}