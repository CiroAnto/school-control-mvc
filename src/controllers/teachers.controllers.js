import teachersDaos from "../DAOs/teachers.daos.js";
const teachersControllers = {};

teachersControllers.getAll = (req, res)=>{
    teachersDaos.getAll()
    .then((teachers) =>{
        res.json({
            data: teachers
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        })
    });
};

teachersControllers.getOne = (req, res) => {
    teachersDaos.getOne(req.params.teacher_id)
    .then((teacher) => {
        if(teacher){
            res.json({
                data: teacher
            })
        }else{
            res.status(404).json({
                message: "Teacher not found"
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        })
    })
}

teachersControllers.insertOne = (req, res) => {
    teachersDaos.insertOne(req.body)
    .then((newTeacher) => {
        if(newTeacher){
            res.status(201).json({
                message: "Teacher created successfully",
                data: newTeacher
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        })
    })
}

teachersControllers.updateOne = (req, res) => {
    teachersDaos.updateOne(req.params.teacher_id, req.body)
    .then((updatedTeacher) => {
        if(updatedTeacher){
            res.json({
                message: "Teacher updated successfully",
                data: updatedTeacher
            })
        }else{
            res.status(404).json({
                message: "Teacher not found"
            })
        }
    })
}

teachersControllers.deleteOne =(req, res) => {
    teachersDaos.deleteOne(req.params.teacher_id)
    .then((deletedTeacher) => {
        if(deletedTeacher){
            res.json({
                message: "Teacher deleted successfully",
                data: deletedTeacher
            })
        }else{
            res.status(404).json({
                message: "Teacher not found"
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        })
    });
}

export default teachersControllers;