import mongoose from "mongoose";
const {model, Schema} = mongoose;

const studentSchema = new Schema({
    student_id:{ 
        type: String,
        required: true,
        unique: true
    },
    name: String,
    lastname: String,
    grade: Number,
    group: String,
    average: Number
},{
    timestamps: true,
    versionKey: false
});

export default model(`student`, studentSchema);