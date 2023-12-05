// const mongoose=require("mongoose")

// const PerfexSchema=new mongoose.Schema({
   
  
  
//     module:{
//         type:String,
//         require:true
//     },

//     chapter:{
//         type:String,
//         require:true
//     },

//     diffculty:{
//         type:String,
//         require:true
//     },

//     refernce:{
//         type:String,
//         require:true
//     },

//     questiontype:{
//         type:String,
//         require:true
//     },


//     // parag
//     subject:{
//         type:String,
//         require:true
//     },

//     chapter1:{
//         type:String,
//         require:true
//     },

//     diffculty1:{
//         type:String,
//         require:true
//     },

//     reference1:{
//         type:String,
//         require:true
//     },

//     // coding

//     subject1:{
//         type:String,
//         require:true
//     },
//     chapter2:{
//         type:String,
//         require:true
//     }


   


// })

// const perfexData=mongoose.model("perfex",PerfexSchema);
// module.exports=perfexData;




const mongoose=require("mongoose")

const ChapterSchema=new mongoose.Schema({
   
  
//   chapter
    // name:{
    //     type:String,
    //     require:true
    // },

    // Description:{
    //     type:String,
    //     require:true
    // },

    // subjecttag:{
    //     type:String,
    //     require:true
    // },

   


    // subject
    // name1:{
    //     type:String,
    //     require:true
    // },

    // Description1:{
    //     type:String,
    //     require:true
    // },

    // subjecttag1:{
    //     type:String,
    //     require:true
    // },

    // chaptertag:{
    //     type:String,
    //     require:true
    // },

    // mcq

    
    module:{
        type:String,
        require:true
    },

    chapter:{
        type:String,
        require:true
    },

    diffculty:{
        type:String,
        require:true
    },

    refernce:{
        type:String,
        require:true
    },

    questiontype:{
        type:String,
        require:true
    },

    // parag

    subject:{
        type:String,
        require:true
    },

    chapter1:{
        type:String,
        require:true
    },

    diffculty1:{
        type:String,
        require:true
    },

    reference1:{
        type:String,
        require:true
    },

    // coding

    
    subject1:{
        type:String,
        require:true
    },
    chapter2:{
        type:String,
        require:true
    }

  


   


})

const perfexData=mongoose.model("perfex",ChapterSchema);
module.exports=perfexData;

