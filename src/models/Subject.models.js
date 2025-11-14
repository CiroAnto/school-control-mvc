import mongoose from 'mongoose';
const {model,Schema} = mongoose;

const subjectSchema = new Schema({
    subject_id:{
        type: String,
        required: true,
        unique:true
    },
    name: String,
    units: Number,
    credits: Number,
    semester: Number,
    hours_per_week: Number
},{
    timestamps: true,
    versionKey: false
});
export default model ('subject', subjectSchema);