const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { error } = require("console");
const taskData = require("./schema")
const json = require("jsonwebtoken");
const perfexData = require("./chapterschema");
const subjectData = require("./subjectschema");
const chapterData = require("./addchapter");

const app = express()
app.use(express.json())
app.use(cors({ origin: "*" }))

// 1.mongodb connection
mongoose.connect("mongodb+srv://kunchalajalaiah9:l1SD1Z6WZTpmInEd@cluster0.lhexxr5.mongodb.net/?retryWrites=true&w=majority")
  .then((res) => console.log("db connected"))
  .catch((err) => console.log("err.message"))


// checking server

app.get("/", (req, res) => {
  res.send("hi....")
})

// 2.step

app.post("/Designation", async (req, res) => {

  try {


    const { name, month, Designation, location, workDays, Duration, salary, HRA, Medical, Transpot, allowance, pf, profisonaltax, total } = req.body


    let newUser = new taskData({
      name: name,
      month: month,
      Designation: Designation,
      location: location,
      workDays: workDays,
      Duration: Duration,

      salary: salary,
      HRA: HRA,
      Medical: Medical,
      Transpot: Transpot,
      allowance: allowance,
      pf: pf,
      profisonaltax: profisonaltax,
      total: total,
    });

    const isUserExist = await taskData.findOne({ salary: salary });
    if (isUserExist) {
      return res.send("salary already exist")
    }

    newUser.save();
    res.send("user created ")

  } catch (e) {
    console.log("e.message")
    res.send("server error")
  }
})

app.get("/allpeople", async (req, res) => {

  const allUsers = await taskData.find({})
  res.status(200).send(allUsers)
})



// subject

app.post("/subjectData", async (req, res) => {

  try {
    const {
      name,
      Description,
      subjecttag


    } = req.body;
    let newUser = new subjectData({
      name: name,
      Description: Description,
      subjecttag: subjecttag



    });
    const isUserExit = await subjectData.findOne({ Description: Description });
    if (isUserExit) {
      return res.send("user already registered");
    }
    newUser.save();
    res.send("Subject created succesfully");
  }

  catch (e) {
    console.log(e.message);
    res.send("Internal server error")
  }
});


app.get("/allsubjectData", async (req, res) => {

  const allUsers = await subjectData.find({})
  res.status(200).send(allUsers)
})


app.delete("/deleteInstitute/:id", async (req, res) => {
  try {
    const id = req.params.id; // Use req.params.id to get the instituteId
    const deletedInstitute = await subjectData.findByIdAndRemove(id);

    if (deletedInstitute) {
      return res.status(200).json(" created successfully");
    } else {
      return res.status(404).json(" deleted successfully");
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).json(e.message);
  }
});


app.put("/UpdateInstitute/:id", async (req, res) => {
  const { id } = req.params;
  const user = await subjectData.findByIdAndUpdate(id, req.body);

  if (!user) {
    res.status(400).json("User Not Found");
  }
  res.status(200).json("users data updated successfully");
});


// chapters


app.post("/chapterData", async (req, res) => {

  try {
    const {
      name1,
      Description1,
      subjecttag1,
      chaptertag


    } = req.body;
    let newUser = new chapterData({
      name1: name1,
      Description1: Description1,
      subjecttag1: subjecttag1,
      chaptertag: chaptertag


    });
    // const isUserExit = await chapterData.findOne({ Description1: Description1 });
    // if (isUserExit) {
    //   return res.send("user already registered");
    // }
    // let payload = {
    //   user: {
    //     id: exists.id
    //   }
    // }
    // jwt.sign(payload, 'jwtpassword', { expressIn: 360000000 },
    //   (error, token) => {
    //     if (err) throw err
    //     return res.json({ token })
    //   })

    newUser.save();
    res.send("Chapter created succesfully");
  }

  catch (e) {
    console.log(e.message);
    res.send("Internal server error")
  }
});


app.get("/allchapterData", async (req, res) => {
  const alluseres = await chapterData.find({})
  res.status(200).send(alluseres)

})


app.delete("/deleteInstitute/:id", async (req, res) => {
  try {
    const id = req.params.id; // Use req.params.id to get the instituteId
    const deletedInstitute = await chapterData.findByIdAndRemove(id);

    if (deletedInstitute) {
      return res.status(200).json("  chapters created successfully");
    } else {
      return res.status(404).json("chapters deleted successfully");
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).json(e.message);
  }
});


app.put("/UpdateInstitute/:id", async (req, res) => {
  const { id } = req.params;
  const user = await chapterData.findByIdAndUpdate(id, req.body);

  if (!user) {
    res.status(400).json("User Not Found");
  }
  res.status(200).json("users data updated successfully");
});


// mcq



app.post("/viewData", async (req, res) => {

  try {
    const {
      module,
      chapter,
      diffculty,
      refernce,
      questiontype

    } = req.body;
    let newUser = new perfexData({
      module: module,
      chapter: chapter,
      diffculty: diffculty,
      refernce: refernce,
      questiontype: questiontype


    });
    const isUserExit = await perfexData.findOne({ diffculty: diffculty });
    if (isUserExit) {
      return res.send("user already registered");
    }
    newUser.save();
    res.send("McQ created succesfully");
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


// parag


app.post("/paragdata", async (req, res) => {
  try {
    const { subject, chapter1, diffculty1, reference1 } = req.body;

    let newUser = new perfexData({
      subject: subject,
      chapter1: chapter1,
      diffculty1: diffculty1,
      reference1: reference1
    });
    const isUserExit = await perfexData.findOne({ diffculty1: diffculty1 });
    if (isUserExit) {
      return res.send("user already registered");
    }

    newUser.save(); //saving mongodb collections
    return res.send("Parag Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});


// app.get("/allperfexData", async (req, res) => {
//   const alluseres = await perfexData.find({})
//   res.status(200).send(alluseres)

// })


//  coding


app.post("/codingdata", async (req, res) => {
  try {
    const { subject1, chapter2, } = req.body;

    let newUser = new perfexData({
      subject1: subject1,
      chapter2: chapter2

    });

    const isUserExit = await perfexData.findOne({ subject1: subject1 });
    if (isUserExit) {
      return res.send("user already registered");
    }

    newUser.save(); //saving mongodb collections
    return res.send("Coding Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});


// app.get("/allperfexData", async (req, res) => {
//   const alluseres = await perfexData.find({})
//   res.status(200).send(alluseres)

// })









app.listen(3051, () => {
  console.log("runing")
})