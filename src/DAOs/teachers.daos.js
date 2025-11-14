import Teacher  from "../models/Teacher.models.js";
const teachersDaos = {};

//Metodo para obtener todos los teachcers
teachersDaos.getAll = async(req, res) =>{
    const teachers = await Teacher.find();
    return teachers;
}

//Metodo para obtener un teacher
teachersDaos.getOne = async(teacher_id) => {
    const teacher = await Teacher.findOne({
        teacher_id: teacher_id
    });
    return teacher;
};

//Metodo para insertar teacher
teachersDaos.insertOne = async(teacherData) => {
    const newTeacher = await Teacher.create(teacherData);
    return newTeacher;
};

//Metodo para actualizar teacher
teachersDaos.updateOne = async(teacher_id, updateData) => {
    const updatedTeacher = await Teacher.findOneAndUpdate({
        teacher_id: teacher_id
    }, {updateData});
    return updatedTeacher;
};

//Metodo para eliminar teacher
teachersDaos.deleteOne = async(teacher_id) => {
    const deletedTeacher = await Teacher.findOneAndDelete({
        teacher_id: teacher_id
    });
    return deletedTeacher;
};
export default teachersDaos;