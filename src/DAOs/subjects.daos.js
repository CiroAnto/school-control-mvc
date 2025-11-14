import Subject from "../models/Subject.models.js";
const subjectsDaos ={};

//Metodo para obtener las materias
subjectsDaos.getAll = async(req, res) => {
    const subjects = await Subject.find();
    return subjects;
}

//Metodo para obtener un subject
subjectsDaos.getOne = async(subject_id) =>{
    const subject = await Subject.findOne({
        subject_id: subject_id
    });
    return subject;
}

//Metodo para insertar subject
subjectsDaos.insertOne = async(subjectData) => {
    const newSubject = await Subject.create(subjectData);
    return newSubject;
}

//Metodo para actualizar subject
subjectsDaos.updateOne = async(subject_id, updateData) => {
    const updatedSubject = await Subject.findOneAndUpdate({
        subject_id: subject_id
    }, updateData);
    return updatedSubject;
}

//Metodo para eliminar subject
subjectsDaos.deleteOne = async(subject_id) => {
    const deletedSubject = await Subject.findOneAndDelete({
        subject_id: subject_id
    });
    return deletedSubject;
}

export default subjectsDaos;