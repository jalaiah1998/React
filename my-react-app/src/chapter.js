import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Chapter = () => {
    const [Open, setOpen] = useState(true)

    
    const [name1, setname1] = useState("");
    const [Description1, setDescription1] = useState("");
    const [subjecttag1, setsubjecttag1] = useState()
    const [chaptertag, setchaptertag] = useState()

    const [data1, setdata1] = useState([]);

    const AddSubject1 = {
        name1: name1,
        Description1: Description1,
        subjecttag1: subjecttag1,
        chaptertag: chaptertag
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (
            name1 &&
            Description1 &&
            subjecttag1 &&
            chaptertag !== ""

        ) {
            const headers = {
                token: ""
            };

            axios
                .post("http://localhost:3051/PerfexData", AddSubject1, {
                    headers,
                })

                .then((response) => {
                    setdata1("response.data");
                    console.log(response.data);
                    if (response.status === 200) {
                        toast.success("Update Successfull", {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored"
                        });
                        setTimeout(function () { }, 3000);
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                });
        } else {
            toast.warning('Enter required details');
        }
    }



    const created = () => {
        setOpen(!Open)
    }
    return (
        <div>

            <div className="container">
                <div className="row">

                    <div className="col-md-2 card" style={{ backgroundColor: "black", color: "white" }}>
                        <div className="d-flex flex-row justify-content-between ">
                            <div>
                                <h5>Instacks</h5>
                            </div>
                            <div>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-calendar-days"></i>
                            </div>
                            <div className="mx-2">
                                <p>Dashboard</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div className="mx-2">

                                <p>HomePage</p>
                            </div>
                        </div>


                        <h5>INSTITUTIONS</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>
                            </div>
                            <div className="mx-2">
                                <p>Institutions</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>

                            </div>
                            <div className="mx-2">
                                <p>Batch Years</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>
                            </div>
                            <div className="mx-2">
                                <p>Batches</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="mx-2">
                                <p>Users</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-brands fa-algolia"></i>
                            </div>
                            <div className="mx-2">
                                <p>Search user</p>
                            </div>
                        </div>

                        <h5>QUESTION BANK</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-layer-group"></i>
                            </div>
                            <div className="mx-2 ">
                                <p onClick={created} className="dropdown-toggle">Self Created QB</p>
                                {Open && (
                                    <ul>

                                        <li><a class="dropdown-item" href="/assesment" style={{ color: "white" }}>Subject</a></li>
                                        <li><a class="dropdown-item" href="" style={{ color: "white" }}>Chapters</a></li>
                                    </ul>
                                )
                                }

                                <p className="dropdown-toggle">MCQ Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="/parag" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/view" style={{ color: "white" }}>View</a></li>
                                    <li><a class="dropdown-item" href="" style={{ color: "white" }}>Upload</a></li>
                                </ul>
                                <p className="dropdown-toggle">Parag MCQ Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="/mcq" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/paragview" style={{ color: "white" }}>View</a></li>

                                </ul>

                                <p className="dropdown-toggle">Coding Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="/coding" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/codingview" style={{ color: "white" }}>View</a></li>

                                </ul>

                            </div>
                        </div>
                        <div>
                            <div className="d-flex flex-row">

                                <i class="fa-brands fa-algolia"></i>

                                <div className="mx-2">
                                    <p>Assigned QB</p>
                                </div>
                            </div>
                        </div>

                        <h5>ASSESSMENTS</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Assessments</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Reports</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="mx-2">
                                <p>Assigned Assessments</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                            </div>
                            <div className="mx-2">
                                <p>Compare</p>
                            </div>
                        </div>

                        <h5>LEARNING PATH</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Learning Path</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div className="mx-2">
                                <p>Access</p>
                            </div>
                        </div>

                        <h5>PRACTICE</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div className="mx-2">
                                <p>pratice</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-solid fa-file-lines"></i>
                            </div>
                            <div className="mx-2">
                                <p>Participation Report</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="mx-2">
                                <p>Assigned</p>
                            </div>
                        </div>


                        <h5>Blogs</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>
                            </div>
                            <div className="mx-2">
                                <p>Blogs</p>
                            </div>
                        </div>

                        <h5>PROCTORING</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-circle-dot"></i>
                            </div>
                            <div className="mx-2">
                                <p>proctoring</p>
                            </div>
                        </div>

                        <h5>PROFILE</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-dollar-sign"></i>
                            </div>
                            <div className="mx-2">
                                <p>billing</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Invoices</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-solid fa-key"></i>
                            </div>
                            <div className="mx-2">
                                <p>Change Password</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div className="mx-2">

                                <p>Compiler Test</p>
                            </div>
                        </div>

                        <hr style={{ backgroundColor: "white" }} />
                        <div className="text-center" >
                            <button style={{ backgroundColor: "blue", color: "white" }}>Logout</button>
                        </div>
                        <div className="text-center">
                            <i class="fa-regular fa-message"></i>
                        </div>
                    </div>
                    <div className="col-1"></div>

                    <div className="col-8 my-5 card">

                        <h6>Fillter Modules:</h6>
                        <div className="d-flex flex-row my-3">
                            <div className="col-6">

                                <select type="text" placeholder="...select Module..." className="w-100">
                                    <option>Java Programe</option>
                                    <option>Python</option>


                                </select>
                                <p>select Module</p>
                            </div>
                            <div className=""></div>
                            <div>
                                <button className="mx-3" style={{ backgroundColor: "blue", color: "white", border: "2px solid blue" }}>Go</button>
                            </div>
                            <div className="" >
                                <button style={{ width: "120px", backgroundColor: "white", color: "red", border: "2px solid red" }} className="mx-3">Clear Fillter</button>
                            </div>

                            <div className="">
                                <button style={{ width: "120px", backgroundColor: "green", color: "white", border: "2px solid green" }} className="mx-3">All Fillter</button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6>Chapters</h6>
                            </div>
                            <div className="row">
                                <div className="col-8"></div>


                                <div class="modal" id="myModal234569">
                                    <div class="modal-dialog" >
                                        <div class="modal-content">


                                            <div class="modal-header">
                                                <h4 class="modal-title">Cerate Chapters</h4>
                                                <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal">

                                                </button>
                                            </div>


                                            <div class="modal-body">
                                            <form action="" onSubmit={onSubmitForm}></form>

                                                <p>Name *</p>
                                                <input type="text" placeholder="...name..." onChange={(e) =>
                                                    setname1(e.target.value)}
                                                    value={name1} />

                                                <p>Description *</p>
                                                <input type="text" placeholder="...description..." onChange={(e) =>
                                                    setDescription1(e.target.value)}
                                                    value={Description1} 
                                                     /><br></br>
                                                <label className="my-3 ">Subject *</label><br></br>
                                                <select type="text" placeholder="...subject tag..." style={{ width: "190px" }} onChange={(e) =>
                                                    setsubjecttag1(e.target.value)}
                                                    value={subjecttag1} >
                                                    <option>Java</option>
                                                    <option>Python</option>
                                                    
                                                </select><br></br>
                                                <label className="my-3 ">Chapter tag *</label><br></br>
                                                <select type="text" placeholder="...subject tag..." style={{ width: "190px" }} onChange={(e) =>
                                                    setchaptertag(e.target.value)}
                                                    value={chaptertag} >
                                                    <option>Programming</option>
                                                    <option>other Common topics</option>
                                                    
                                                </select>
                                                <p></p>
                                            </div>


                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" >Submitt</button>
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>



                                <div className="col-4">

                                    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#myModal234569"  style={{ backgroundColor: "blue", color: "white", border: "2px solid blue" }}  >+create Chapter</button>
                                </div>
                            </div>
                        </div>


                          {/* pen */}

                          <div class="modal" id="myModal23452">
                            <div class="modal-dialog" >
                                <div class="modal-content">


                                    <div class="modal-header">
                                        <h4 class="modal-title">Cerate Chapter</h4>
                                        <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal">

                                        </button>
                                    </div>


                                    <div class="modal-body">

                                        <p>Name *</p>
                                        <input type="text" placeholder="...name..." style={{}} />
                                        <p>Description *</p>
                                        <input type="text" placeholder="...description..." style={{}} /><br></br>
                                        <label className="mt-3 ">Subject *</label><br></br>
                                        <select type="text" placeholder="...subject tag..." style={{ width: "190px" }}>
                                            <option>algorithms</option>
                                            <option>Botany</option>
                                            <option>C-programming</option>
                                            <option>Chemistry</option>
                                            <option>Communication</option>
                                            <option>Data-reasoning</option>
                                            <option>Data-structres</option>
                                            <option>Dbms</option>
                                            <option>java-programming</option>
                                            <option>Mathematics</option>
                                            <option>others</option>
                                            <option>physics</option>
                                            <option>programming</option>
                                            <option>programming Skills</option>
                                            <option>Quntative apptitude</option>
                                        </select>
                                        <p></p>
                                    </div>


                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" >Submitt</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Delete */}

                        <div class="modal" id="myModal234563">
                            <div class="modal-dialog" >
                                <div class="modal-content">


                                    <div class="modal-header">
                                        <h4 class="modal-title">Delete Subject</h4>
                                        <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal">

                                        </button>
                                    </div>


                                    <div class="modal-body">

                                        Are Sure Delete this subject


                                    </div>


                                    <div class="modal-footer">
                                        <p>No</p>
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" >Yes</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <table class="table table-bordered my-4">
                            <thead>
                                <tr>
                                    <th style={{ fontSize: "12px" }} className="text-center">SNO</th>
                                    <th style={{ fontSize: "12px" }} className="text-center">NAME</th>
                                    <th style={{ fontSize: "12px" }} className="text-center">TAG</th>
                                    <th style={{ fontSize: "12px" }} className="text-center">CHAPTERS</th>
                                    <th style={{ fontSize: "12px" }} className="text-center">TOTAL QUESTION</th>
                                    <th style={{ fontSize: "12px" }} className="text-center">ACTION</th>
                                </tr>

                                <tr>
                                    <td className="text-center">1</td>
                                    <td className="text-center">Frontend</td>
                                    <td className="text-center mx-3" >Programming</td>
                                    <td className="text-center">0</td>
                                    <td></td>

                                    <td>
                                        <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#myModal23452">
                                            <i class="fa-sharp fa-solid fa-pen mx-1" style={{ color: "skyblue" }}></i>
                                        </button>
                                        <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#myModal234563">

                                            <i class="fa-solid fa-trash-can mx-2" style={{ color: "red" }}></i>
                                        </button>
                                    </td>
                                    </tr>
                                    
                            </thead>
                        </table>


                    </div>


                </div>

            </div>
        </div>
    )
}

export default Chapter;