import mongoose from "mongoose";

mongoose.connect("mongodb+srv://camc:Ciroanto075@camc.rlfdhaj.mongodb.net/school_control?retryWrites=true&w=majority&appName=camc")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

export default mongoose;