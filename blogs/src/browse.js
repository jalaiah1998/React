import React from "react";
import { useState, useEffect } from "react";



const card = [
    {
        id: 1,
        head: "Graphic Designer",
        salary: "4.5-6 LPA",
        companyName: "Angel Brooking",
        time: "full time",
        location: "Hyderabad/secunderabad,Telengana",
        Experience: "Fresher"

    },
    {
        id: 2,
        head: "Web developer",
        salary: "5-6 LPA",
        companyName: "Tcs",
        time: "full time",
        location: "Hyderabad/secunderabad,Telengana",
        Experience: "2 years"

    },
    {
        id: 3,
        head: "testing",
        salary: "5.4-6 LPA",
        companyName: "cognizent",
        time: "full time",
        location: "Hyderabad/secunderabad,Telengana",
        Experience: "1 year"

    },
    {
        id: 4,
        head: "java developer",
        salary: "2-6 LPA",
        companyName: "Deloitte",
        time: "full time",
        location: "Hyderabad/secunderabad,Telengana",
        Experience: "3 year"

    },
    {
        id: 5,
        head: "Data anayalist",
        salary: "4.5-6 LPA",
        companyName: "wipro",
        time: "full time",
        location: "Hyderabad/secunderabad,Telengana",
        Experience: "Fresher"

    },

]

const card2 = [
    {
        id: 1,
        logo: "",
        head: "Graphic Designer",
        companyName: "wipro",
        details: "show more jobs in the company",
        salary: "4.5-6 LPA",
        location: "Hyderabadh",
        years: "1-3 years",
        status: "post Few Hours Ago",
        openings: "openings:1",
        jobApplication: "job Application 580",
        button: "Apply Now"
    },
]

function Browse() {
    const [selectedJob, setselectedJob] = useState(null);

    const changeJob = async (jobNo) => {
        const job = bigCard.find(job => job.id === jobNo);
        setselectedJob(job)
    }

    const arrayDataItems = card.map((cards) => <ul className='card' onClick={((e) => changeJob(cards.id))}>
        <div className="d-flex flex-row">
            <p>{cards.head}</p>
            <p>{cards.salary}</p></div>
        <p>{cards.companyName}</p>
        <p>{cards.time}</p>
        <p>{cards.location}</p>
        <p>{cards.Experience}</p>


    </ul>)


    return (
        <div>

            <div className="col-md-4">
                <ul>{arrayDataItems}</ul>
            </div>





            <div className=" col-md-8 col-12">
                <div>
                    {selectedJob && <div>
                        <div className='container card'>                     <div className='row'>
                            <div className='col-md-5 d-flex flex-row' style={{}}>
                                <div>
                                    <img style={{width:"45px"}} src={selectedJob.logo} />
                                </div>
                                <div>


                                </div>

                            </div>

                        </div>
                        </div>



                    </div>

                    }

                </div>

            </div>
        </div>

    )
                }


    export default Browse;