
const mongoose=require("mongoose")

const SubjectSchema=new mongoose.Schema({
   
  
//   subject
    name:{
        type:String,
        require:true
    },

    Description:{
        type:String,
        require:true
    },

    subjecttag:{
        type:String,
        require:true
    },

   })

const subjectData=mongoose.model("SubjectSchema",SubjectSchema);
module.exports=subjectData;