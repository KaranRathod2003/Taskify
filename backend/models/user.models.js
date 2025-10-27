import mongoose from 'mongoose';
import { type } from 'requests';

const userSchema = mongoose.Schema({
    username : {
        type: String,
        required : true,
        unique : true,
        trim : true
    },
    email : {
        type:  String,
        required : true,
        unique : true,
        lowercase : true,
    },
    password:{
        type : String,
        required : true
    },
    role : {
        type :String,
        enum : ['admin', 'user'],
        default : 'user'
    },
    assignedTask:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Task"
    }],
    submittedTask : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Task"
    }]
}, {timestamps : true});

export const User = mongoose.model("User", userSchema);