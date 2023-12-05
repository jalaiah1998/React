
const mongoose=require("mongoose")

const AddchapterSchema=new mongoose.Schema({
   
  

   


    // subject
    name1:{
        type:String,
        require:true
    },

    Description1:{
        type:String,
        require:true
    },

    subjecttag1:{
        type:String,
        require:true
    },

    chaptertag:{
        type:String,
        require:true
    },

 

   

  


   


})

const chapterData=mongoose.model("AddchapterSchema",AddchapterSchema);
module.exports=chapterData;

