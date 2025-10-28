import mongoose from "mongoose";
// import { type } from "requests";

const taskSchema = mongoose.Schema({
    title: {
        type : String,
        trim : true,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    assignedTo : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    status : {
        type : String,
        enum : ["pending", "in-progress", "completed"],
        default : "pending"
    },
    submissionDate: {
      type: Date,
    },
    completedAt: {
      type: Date,
    },

}, {timestamps : true});

export const Task = mongoose.model("Task", taskSchema);