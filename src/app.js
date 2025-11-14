import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import StudentsRouters from "./routes/students.routes.js"
import TeacherRouters from "./routes/teachers.routes.js"
import SubjectRouters from "./routes/subjects.routes.js";
const app = express()
// Settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set("views", "./src/views");

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

// Routes
app.use("/api/students", StudentsRouters);
app.use("/api/teachers", TeacherRouters);
app.use("/api/subjects", SubjectRouters);

export default app;