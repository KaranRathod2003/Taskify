import { asyncHandler } from "../utils/asyncHandler.js";
import { Task } from "../models/tasks.models.js"
import {ApiError} from '../utils/ApiError.js'
import { ApiResponse } from "../utils/ApiResponse.js";


const createTask = asyncHandler ( async (req, res) =>{
    const {title, description, assignedTo} = req.body
    if(req.user.role !== "admin"){
        throw new ApiError(400, "Only Admin can create task");
    }
    if(!title || !description || !assignedTo){
        throw new ApiError(400, "All fields are required");
    }

    const task = await Task.create({
        title,
        description,
        createdBy : req.user._id,
        assignedTo
    })
    return res.status(201).json(
        new ApiResponse(200, "Task successfully created", task)
    )
}) 

const getTasks = asyncHandler(async (req, res) =>{
    let tasks;
    if(req.user.role === "admin"){
    tasks = await Task.find({ createdBy: req.user._id })
      .populate("assignedTo", "username email")
      .sort({ createdAt: -1 });
  } else {
    tasks = await Task.find({ assignedTo: req.user._id })
      .populate("createdBy", "username email")
      .sort({ createdAt: -1 });
  }

  res.status(201).json(
    new ApiResponse(200, "Task fetched successfully", tasks)
  )
}) 

const updateTaskStatus = asyncHandler (async (req, res) =>{
    const { id } = req.params;
    const { status }= req.body;
    const task = await Task.findById(id);
    if(!Task) throw new ApiError(404, "Task not found");

    if(req.user.role !== "admin" &&
        task.assignedTo.toString() !== req.user._id.toString()
    ){
        throw new ApiError(403, "Unauthorized to update tasks")
    }


    if(!["pending", "in-progress", "completed"].includes(status)){
        throw new ApiError(404, "invalid status")
    }
    task.status = status;

    if(status === "completed"){
        task.completedAt = new Date()
    }else if(status === "in-progress"){
        task.submissionDate = new Date()
    }
    await task.save();

    return res.status(201).json(
        new ApiResponse(200, "Task status updated successfully", task)
    )
})


const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (req.user.role !== "admin") {
    throw new ApiError(403, "Only admin can delete tasks");
  }

  const deleted = await Task.findByIdAndDelete(id);
  if (!deleted) throw new ApiError(404, "Task not found");

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Task deleted successfully"));
});


export {createTask, updateTaskStatus, getTasks, deleteTask}