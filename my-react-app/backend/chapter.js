const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const perfexData = require("./chapterschema");


const app = express();
app.use(express.json())

app.use(cors({ origin: "*" }))


mongoose.connect("mongodb+srv://kunchalajalaiah9:l1SD1Z6WZTpmInEd@cluster0.lhexxr5.mongodb.net/?retryWrites=true&w=majority")
  .then((res) => console.log("db connected"))
  .catch((err) => console.log(err.message));

app.get("/", (req, res) => {
  res.send("success")
})
























app.post("/PerfexData", async (req, res) => {

  try {
    const {
      name,
      Description,
      subjecttag


    } = req.body;
    let newUser = new perfexData({
      name: name,
      Description: Description,
      subjecttag: subjecttag



    });
    const isUserExit = await perfexData.findOne({ Description: Description });
    if (isUserExit) {
      return res.send("user already registered");
    }
    newUser.save();
    res.send("user created succesfully");
  }

  catch (e) {
    console.log(e.message);
    res.send("Internal server error")
  }
});


app.get("/allperfexData", async (req, res) => {
  const alluseres = await perfexData.find({})
  res.status(200).send(alluseres)

})


// chapters



app.post("/paragdata", async (req, res) => {
  try {
    const { subject, chapter1, diffculty1, reference1 } = req.body;

    let newUser = new perfexData({
      name1: name1,
      Description1: Description1,
      subjecttag1: subjecttag1,
      chaptertag: chaptertag
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});


app.get("/allperfexData", async (req, res) => {
  const alluseres = await perfexData.find({})
  res.status(200).send(alluseres)

})



//  coding

// app.post ("/PerfexData",async(req,res)=>{

//   try{
//     const{
//       subject1,
//       chapter2,



//     }=req.body;
//     let newUser=new perfexData({
//       subject1:subject1,
//       chapter2:chapter2




//     });
//     const isUserExit = await perfexData.findOne({chapter2:chapter2});
//     if (isUserExit){
//       return res.send("user already registered");
//     }
//     newUser.save();
//     res.send("user created succesfully");
//   }

//   catch (e){
//     console.log(e.message);
//     res.send("Internal server error")
//   }
//  });


//  app.get ("/allperfexData",async (req,res)=>{
// const alluseres=await perfexData.find({})
// res.status(200).send(alluseres)

//  })



// app.post("/codingdata", async (req, res) => {
//   try {
//     const {subject1,chapter2, } = req.body;

//     let newUser = new perfexData({
//       subject1: subject1,
//       chapter2:chapter2

//     });

//     newUser.save(); //saving mongodb collections
//     return res.send("user Created Successfully");
//   } catch (e) {
//     console.log(e.message);
//     res.send("Inernal server error");
// }
// });


//  app.get ("/allperfexData",async (req,res)=>{
// const alluseres=await perfexData.find({})
// res.status(200).send(alluseres)

//  })























app.listen(3051, () => {
  console.log("server runing")
})