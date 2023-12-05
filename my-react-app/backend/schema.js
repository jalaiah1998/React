const mongoose =require("mongoose");

const taskData= new mongoose.Schema({
    name:{
        type:"string",
        require:"true",
    },
    month:{
        type:"string",
        require:"true",
    },
    Designation:{
        type:"string",
        require:"true",
    },

    location:{
        type:"string",
        require:"true",
    },
    workDays:{
        type:"string",
        require:"true",
    },
    
    Duration:{
        type:"string",
        require:"true",
    },
    
    salary:{
        type:"string",
        require:"true",
    },
    
    HRA:{
        type:"string",
        require:"true",
    },
    
    Medical:{
        type:"string",
        require:"true",
    },
    
    Transpot:{
        type:"string",
        require:"true",
    },
    
    allowance:{
        type:"string",
        require:"true",
    },
    
    pf:{
        type:"string",
        require:"true",
    },
    
    profisonaltax:{
        type:"string",
        require:"true",
    },
    
    total:{
        type:"string",
        require:"true",
    },
    
    
    



})

module.exports =mongoose.model("taskData",taskData);