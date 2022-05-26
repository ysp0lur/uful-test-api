import { ITodo } from './../types/todo';
import { model, Schema } from 'mongoose'

const todoSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    }

}, { timestamps: true, versionKey: false });


export default model<ITodo>('Todo', todoSchema)