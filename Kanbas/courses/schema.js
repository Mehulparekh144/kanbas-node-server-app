import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique : true
    },
    name: {
        type: String,
    },
    number: {
        type: String,
    },
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
    department: {
        type: String,
    },
    credits: {
        type: Number,
    },
    description: {
        type: String,
    }
} , {collection : "courses"});

export default courseSchema;