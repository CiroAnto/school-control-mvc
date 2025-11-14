import subjectsDaos from "../DAOs/subjects.daos.js";
const subjectsControllers = {};

subjectsControllers.getAll = (req, res) =>{
    subjectsDaos.getAll()
    .then((subjects) => {
        res.json({
            data: subjects
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        })
    });
}

subjectsControllers.getOne = (req, res) => {
    subjectsDaos.getOne(req.params.subject_id)
    .then((subject) => {
        if(subject){
            res.json({
                data: subject
            })
        }else{
            res.status(404).json({
                message: "Subject not Found"
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        })
    })
}

subjectsControllers.insertOne = (req, res) => {
    subjectsDaos.insertOne(req.body)
    .then((newSubject) => {
        if(newSubject){
            res.status(201).json({
                message: "Subject created successafully",
                data: newSubject
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        })
    })
}

subjectsControllers.updateOne = (req, res) => {
    subjectsDaos.updateOne(req.params.subject_id, req.body)
    .then((updatedSubject) => {
        if(updatedSubject){
            res.json({
                message: "Subject updated successfully",
                data:updatedSubject
            })
        }
    })
    .catch((error) =>{
        res.status(500).json({
            message: error.message
        })
    })
}

subjectsControllers.deleteOne = (req, res) => {
    subjectsDaos.deleteOne(req.params.subject_id)
    .then((deletedSubject) => {
        if(deletedSubject){
            res.json({
                message: "Subject deleted successfully",
                data: deletedSubject
            })
        }else{
            res.status(404).json({
                message: "Subject not found"
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        })
    });
}

export default subjectsControllers;