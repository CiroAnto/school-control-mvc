import StudentsDaos from "../DAOs/students.daos.js"
const studentsControllers = {};
studentsControllers.getAll = (req, res) =>{
    //Aqui vamos a pedir los datos a DAO
    StudentsDaos.getAll()
        .then((students)=>{
            res.json({
                data: students
            })
            //res.render("../views/index.ejs", {students});
        })
        .catch((err)=>{
            res.status(500).json({
                message: err
            })
        })
}

studentsControllers.getOne = (req, res) => {
    StudentsDaos.getOne(req.params.student_id)
        .then((student) => {
            if (student){
                res.json({
                    data: student
                })
                //res.render("edit.ejs", {student})
            }else{
                res.status(404).json({
                    message: "Student not found"
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message
                
            })
        })
}

studentsControllers.insertOne = (req, res) => {
    StudentsDaos.insertOne(req.body)
    .then((newStudent) => {
        //res.redirect("/api/students/getAll");
        res.json({
            message: "Student Created",
            data: newStudent
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        })
    })
}

studentsControllers.updateOne = (req, res) =>{
    StudentsDaos.updateOne(req.params.student_id, req.body)
    .then((updateStudent)=>{
        //res.redirect("/api/students/getAll");
        res.json({
            data: updateStudent
        })
    })
    .catch((error)=>{
        res.status(500).json({
            message: error.message
        })
    })
}

studentsControllers.deleteOne = (req, res) =>{
    StudentsDaos.deleteOne(req.params.student_id)
    .then((deletedStudent)=>{
        if(deletedStudent){
            //res.redirect("/api/students/getAll")
            res.json({
                data: deletedStudent
            })
        }else{
            res.status(404).json({
                message: "Student not found"
            })
        }
    })
    .catch((error)=>{
        res.status(500).json({
            message: error.message
        })
    })
}
export default studentsControllers;