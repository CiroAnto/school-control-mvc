import Student from "../models/Student.models.js";
const StudentsDaos = {}
//Metodo para obtener todos los estudiantes
StudentsDaos.getAll = async() =>{
    //Aqui le voy a pedir al modelo de mongoose que mande los estudiantes del clusters
    const students = await Student.find();
    return students;
}

//Metodo para obtener un estudiante por su id
StudentsDaos.getOne = async(student_id) => {
    const student = await Student.findOne({student_id: student_id});
    return student;
};

//Metodo para insertar un estudiante
StudentsDaos.insertOne = async(studentData) => {
    const newStudent = await Student.create(studentData);
    return newStudent;
}

//Metodo para actualizar un estudiante
StudentsDaos.updateOne = async(student_id, updateData) =>{
    const updatedStudent = await Student.findOneAndUpdate({
        student_id: student_id
    }, updateData)
    return updatedStudent;
}

//Metodo para eliminar un estudiante
StudentsDaos.deleteOne = async(student_id)=>{
    const deletedStudent = await Student.findOneAndDelete({
        student_id: student_id
    });
    return deletedStudent;
}
export default StudentsDaos;