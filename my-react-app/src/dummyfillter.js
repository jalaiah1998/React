import React, { useState } from "react";

const dummyblogs = [
    {
        id: 1,
        experience: "0-1 years",
        location: "ongole",
        salary: '5-6 lakhs',
        Designation: "B.Tech",
        position:" team leader",
        skills: "java",
        company: "Tata",
        Image_url: "https://indiacsr.in/wp-content/uploads/2023/06/Job-Scandal-at-TCS.jpg"
    },
    {
        id: 2,
        experience: "2-3 years",
        location: "ongole",
        salary: '4-8 lakhs',
        Designation: "B.Tech",
        position:" senior developer",
        skills: "frontend",
        company: "Amazon",
        Image_url: "https://static.businessworld.in/article/article_extra_large_image/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png"
    },
    {
        id: 3,
        experience: "4-5 years",
        location: "kandhukuru",
        salary: '4-8 lakhs',
        Designation: "B.Tech",
        skills: "Network engineer",
        position: "senior developer",
         company: "Deloite",
        Image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAq1BMVEUAAAD///+ZmZloaGjy8vLq6urFxcXl5eV0dHTR0dGkpKTBwcH7+/vf39/w8PCKioqVlZXOzs6tra0AAAVvb29+fn6zs7NLS0siIiJDQ0M+Pj5QUFCnp6e7u7vX19dWVlaCgoIsLCxfX182NjYuLi4ZGRkPDw9LYjlzmVBmiEYVJAmWlpYkJCRafjyMyFeEzEWIt16Hv1GFxUkWIBaEw1VehzpacT11oUshMRlrm6mhAAADVUlEQVR4nO3Ya1vaMByG8ZRDsfSMgoqAjE7nptMN3eH7f7I1/yQNDnRvxvDq7t8bYlIz8iynqhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH9BaMyHJ7vbx4soWlxu/1pdG9vy9H1TXU338BXfpKCRjHa1d3RTd6u6V9dm9ecqTpNgLFWnYV3c2UcbBRuy99vtL+SW2NyGuvlIqo50cbjnr/tmBM+C225/Ibdlnudj1/y/5pYVnUlPgptstb+Qm1P45q4udvb2Rd8YPdiBLiwkOKnrlvUyTCKZRj6307ina835sUjTtFTTQaab++lgrAZ9+S9IB7fycKgfTpcHGNG/0eR2FrglN3fLtlQbuQ03a+Vc6KvzZoXnfsGPNh9ODzey/WpyMxNuptTM73cTn1vRHLsS3Ou5LX0X0WGHtzc+t4kuxuqdhLNclfrzyuV2JSGE88TGaHKbZrItZv1srDJZsr1+1jGnbVKsZOJu3/1awecm8yz0C7Mn08j+mNvpd2nnkMlNqdtm+zPngpyncrIWdSG1y7aFfG4jM99knhV5vuzLoG1usf64qJ/Ssyrxue28h0hPw7qLKLDbYfv43EKzOQ2CDXOXW2pWrXKFV3OLN7tYHGpk++Vzk61qqfo7c5M0r5U9Pc5ez63c7EJO1OPjgwxuj5rcxjLKOzOhYvu6X7jcItOoXIB/nm+2h3CmdGY6uFZl53KTUesdP3Qzy7C5yZalr7z6qOz9tr+Zq7DPTW5vp/7f+HDz8VOdWutyS8qFec3Sg136TUnnYXNb2SUn52fsc5NrXfjutGPP07Q6z+8udKmvZ6fqnin1+f5h/aWNuTVyXSMRJotokARTf++V5ZuYeM99bkfuV5WaumJlHg7SKE30XPy6Xq/vH1u2x23FZqZWU+Fyq3ytfnd3uV373JoTpVJV0jw8Usdfn57u14/tmm4+tySubNVlc6TONt5Pp+6Coi+0zd8tzYXY5OYCr/upUtdFqNS3+4eHL9cty60jivzZ61B3FEblvKO39pVuNn/9PpmUUVxcSbmoa830vNC1Hcm8mpVRODQHwuWs7iIeSrfff9z8bNlxCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4jF/idCQefWVUrwAAAABJRU5ErkJggg=="
    },
    {
        id: 4,
        experience: "5-6 years",
        location: "kothapatanam",
        salary: '9-10 lakhs',
        Designation: "B.Tech",
        skills: "sales force",
        position: " junior developer",
        company: "accenture",
        Image_url: "https://content3.jdmagicbox.com/comp/chennai/f5/044pxx44.xx44.090428165826.h9f5/catalogue/accenture-services-pvt-ltd-perungalathur-chennai-call-centres-d5nr51o5vx.jpg"
    },
    {
        id: 5,
        experience: "7-8 years",
        location: "poodli",
        salary: '10-12 lakhs',
        Designation: "B.Tech",
        position: "accountant",
        skills: "Devops",
        company: "capgemini",
        Image_url: "https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png"
    },

    {
        id: 6,
        experience: "8-9 years",
        location: "khammam",
        salary: '12-14 lakhs',
        Designation: "B.Tech",
        position: "Team leader",
        skills: "Aws",
        company: "PrimeEra",
        Image_url: "https://media.licdn.com/dms/image/C510BAQFV-58gDWnJzA/company-logo_200_200/0/1630590269803/primeramt_logo?e=2147483647&v=beta&t=AoWTXNPtACv3cJOCIMa-yfP7yX9K0ljRjIqhENVYigM"
    },
    {
        id: 7,
        experience: "9-10 years",
        location: "chimakurthy",
        salary: '14-15 lakhs',
        Designation: "B.Tech",
        position: "junior developer",
        skills: "poewr_Bi",
        company: "phonepay",
        Image_url: "https://play-lh.googleusercontent.com/6iyA2zVz5PyyMjK5SIxdUhrb7oh9cYVXJ93q6DZkmx07Er1o90PXYeo6mzL4VC2Gj9s"
    },
    {
        id: 8,
        experience: "2-3 years",
        location: "poodli",
        salary: '5-6 lakhs',
        Designation: "B.Tech",
        skills: "frontend",
        position: "junior developer",
        company: "capgemini",
        Image_url: "https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png"
    },
    {
        id: 9,
        experience: "7-8 years",
        location: "poodli",
        salary: '10-12 lakhs',
        Designation: "B.Tech",
        skills: "Devops",
        position: "senior developer",
        company: "capgemini",
        Image_url: "https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png"
    },











]


const Dummyfillter = () => {


    const [userdata, setuserdata] = useState(dummyblogs);
    const [browsejob, setbrowsejob] = useState("");
    const [userskills,setuserskills]=useState("");
    const [userfillter,setUsefillter]=useState("")

    const onChange = (paraId) => {
        const paralist = dummyblogs.find(paralist => paralist.id === paraId);
        setbrowsejob(paralist);

    }

    const validateskills = (e) => {
        const fillter = dummyblogs.filter((job) =>
            job.skills.includes(e)
        )
        setUsefillter(fillter);
        setuserdata(fillter);


    }
    const validateExp = (e) => {
        const fillter = dummyblogs.filter((job) =>
            job.experience.includes(e)
        )
        setUsefillter(fillter);
        setuserdata(fillter);


    }

    const validatelocation = (e) => {
        const fillter = dummyblogs.filter((job) =>
            job.location.includes(e)
        )
        setUsefillter(fillter);
        setuserdata(fillter);


    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-12 col-md-4">
                        <p className="dropdown-toggle shadow " > <i class="fa-solid fa-location-dot mx-3"></i><input type="text" placeholder="Job title,skills or company" className="mx-3 searchbox " /></p>

                    </div>

                    <div className="col-12 col-md-4">
                        <p className="dropdown-toggle shadow"><i class="fa-solid fa-location-dot mx-3"></i><input type="text" placeholder="Jobtitle,skills or company" className="inp1 searchbox " /></p>
                    </div>
                    <div className="text-center">
                        <button style={{ width: "150px", borderRadius: "12px" }}>Search</button>
                    </div>

                </div>

            </div>

            <div className="container py-4">
                <div className="row">


                    <div class="dropdown col-md-2">

                        <button type="button" class="btn px-3    dropdown-toggle" style={{ borderRadius: "20px", backgroundColor: "lightblue" }} data-bs-toggle="dropdown">
                            Experience
                        </button>


                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onClick={()=>{validateExp('0-1')}}>0-1</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>{validateExp('2-3')}}>2-3</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>{validateExp('4-5')}}>4-5</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>{validateExp('5-6')}}>5-6</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>{validateExp('7-8')}}>7-8</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>{validateExp('8-9')}}>8-9 </a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>{validateExp('9-10')}}>9-10 </a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>{validateExp('7-8')}}>7-8 </a></li>


                        </ul>
                    </div>
                    <div class="dropdown col-md-2">

                        <button type="button" class="btn px-3    dropdown-toggle" style={{ borderRadius: "20px", backgroundColor: "lightblue" }} data-bs-toggle="dropdown">
                            Location
                        </button>


                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onClick={()=>validatelocation('ongole')}>ongole</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validatelocation('ongole')}>ongole</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validatelocation('kandhukuru')}>kandhukuru</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validatelocation('kothapatanam')}>kothapatanam</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validatelocation('poodli')}>poodli</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validatelocation('poodli')}>poodli </a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validatelocation('chimakurthy')}>chimakurthy </a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validatelocation('khammam')}>khammam</a></li>


                        </ul>
                    </div>
                    <div class="dropdown col-md-2">

                        <button type="button" class="btn px-3    dropdown-toggle" style={{ borderRadius: "20px", backgroundColor: "lightblue" }} data-bs-toggle="dropdown">
                            Salary
                        </button>


                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">5-6 lakhs</a></li>
                            <li><a class="dropdown-item" href="#">4-8 lakhs</a></li>
                            <li><a class="dropdown-item" href="#">4-8 lakhs</a></li>
                            <li><a class="dropdown-item" href="#">9-10 lakhs</a></li>
                            <li><a class="dropdown-item" href="#">10-12 lakhs</a></li>
                            <li><a class="dropdown-item" href="#">14-15 lakhs </a></li>
                            <li><a class="dropdown-item" href="#">5-6 lakhs </a></li>
                            <li><a class="dropdown-item" href="#">10-12 lakhs</a></li>


                        </ul>
                    </div>
                    <div class="dropdown col-md-2">

                        <button type="button" class="btn px-3    dropdown-toggle" style={{ borderRadius: "20px", backgroundColor: "lightblue" }} data-bs-toggle="dropdown">
                            Designation
                        </button>


                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">B.Tech</a></li>
                            <li><a class="dropdown-item" href="#">B.Tech</a></li>
                            <li><a class="dropdown-item" href="#">B.Tech</a></li>
                            <li><a class="dropdown-item" href="#">B.Tech</a></li>
                            <li><a class="dropdown-item" href="#">B.Tech</a></li>
                            <li><a class="dropdown-item" href="#">B.Tech </a></li>
                            <li><a class="dropdown-item" href="#">B.Tech  </a></li>
                            <li><a class="dropdown-item" href="#">B.Tech </a></li>


                        </ul>
                    </div>
                    <div class="dropdown col-md-2">

                        <button type="button" class="btn px-3    dropdown-toggle" style={{ borderRadius: "20px", backgroundColor: "lightblue" }} data-bs-toggle="dropdown">
                            skills
                        </button>


                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onClick={()=>validateskills}>java</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validateskills}>frontend</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validateskills}>Network engineer</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validateskills}>sales force</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validateskills}>Devops</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validateskills}>Aws</a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validateskills}>poewr_Bi  </a></li>
                            <li><a class="dropdown-item" href="#" onClick={()=>validateskills}>Devops </a></li>


                        </ul>
                    </div>
                    <div class="dropdown col-md-2">

                        <button type="button" class="btn px-3    dropdown-toggle" style={{ borderRadius: "20px", backgroundColor: "lightblue" }} data-bs-toggle="dropdown">
                            position
                        </button>


                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#"> team leader</a></li>
                            <li><a class="dropdown-item" href="#">senior developer</a></li>
                            <li><a class="dropdown-item" href="#">senior developer</a></li>
                            <li><a class="dropdown-item" href="#">junior developer</a></li>
                            <li><a class="dropdown-item" href="#">accountant</a></li>
                            <li><a class="dropdown-item" href="#">team leader</a></li>
                            <li><a class="dropdown-item" href="#">junior developer  </a></li>
                            <li><a class="dropdown-item" href="#">junior developer </a></li>
                            <li><a class="dropdown-item" href="#">junior developer </a></li>


                        </ul>
                    </div>




                </div>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 ">
                        {userdata.map(blog => <ul key={blog.id}>
                            <div className={`card text-center ${dummyblogs && dummyblogs.userdata === userdata ? "selecetd" : ''}`} onClick={((e) => onChange(blog.id))}>
                                <h4>{blog.experience}</h4>
                                {/* <h4>{blog.Designation}</h4> */}
                                <h4>{blog.company} </h4>
                                <h4>{blog.location}</h4>
                                {/* <h4>{blog.salary}</h4> */}
                                {/* <h4>{blog.company}</h4> */}
                                <h4>{blog.skills}</h4>
                                <div className="text-center">
                                    <img src={blog.Image_url} alt={blog.image} width={200} />
                                    <p className="text-end">published one day ago</p>
                                </div>
                            </div>

                        </ul>)}


                    </div>
                    <div className="col-2"></div>

{/* click to the other side visible use usestatebrowsejobs */}
                    <div className="col-12 col-md-6 ">

                        {
                            browsejob &&
                            <div className="card p-2">
                                <div className="card">
                                    <div className="d-flex flex-row" >
                                        <div className="browescard p-2">
                                            <h5>{browsejob.company}</h5>
                                            <p>show more job in the company</p>
                                        </div>
                                        <div className="px-5">
                                            <p>{browsejob.location}</p>
                                            <p>{browsejob.skills}</p>
                                            <p>{browsejob.experience}</p>
                                        </div>


                                    </div>
                                    <hr></hr>
                                    <div className="p-2">
                                        <div className="d-flex flex-row justify-content-between">
                                            <p>posted Few Hours Ago</p>
                                            <button className=" mx-5" style={{ width: "200px", borderRadius: "25px" }}>Apply Now</button>
                                        </div>
                                        <p>max position:{browsejob.skills}</p>
                                        <p>Number of Applicants:2-4</p>
                                    </div>
                                    <div className="card">

                                        <div className="p-2">
                                            <h5 className="text-center">job Description</h5>
                                            <h5 className="text-center">Roles and Responsbilities</h5>
                                            <p>planing concepts by studying relevent information and materials<br></br>
                                                illustrating cocepts by designing examples of an assignment size,type summitting for approval<br></br>
                                                Creting a wide range of graphics and layouts for products ,company logos
                                                socal media banners, artwork and websits with software such as photologo.
                                                Creating new graphics for socal media ,Email mailing Broadcasts lables & stickers for
                                                products. Catogery ,etc .using adobe tools like photo shop ,illustarrtion and design
                                                constructing with network, web design ,markting ,paintings and configure as necessary .
                                                products. Catogery ,etc .using adobe tools like photo shop ,illustarrtion and design
                                                rewiving the layouts and suggesitions and suggesting imporvements wirh necessary.<br></br></p>
                                            <h5 className="text-center">skills and Responsbilities</h5>
                                            <p>Experience as a graphic designer or in a reational field.
                                                Demostriate graphic skills witha strong portfolio.
                                                Proficiency with require desktop publishing tools ,including Photoshop is desingn and
                                                lillustrate<br></br>
                                                A strong eye for visual compsition .
                                                Effective time management skills and ability to meet deadlines,
                                                Able to give and recive construction crision
                                                iciency with require desktop publishing tools ,including Photoshop is desingn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        }


                    </div>


                </div>

            </div>
        </div>
    )
}
export default Dummyfillter;