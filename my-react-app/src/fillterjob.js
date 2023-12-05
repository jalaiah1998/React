import React, { useState } from "react";

const Cricketerslist=[
    {
        id:"1",
        Image_url:"https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/09/Virat-Kohli-vs-Pakistan-AP-9.jpg?size=*:900",
        role:"chaser",
        name:"King Kholi",


    },
    {
        id:"2",
        Image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzs08GQaW_gu8JGTNj8sghuKxh3JQVXjUgFw&usqp=CAU",
        role:"opener",
        name:"Kl rahul",
        

    },
    {
        id:"3",
        Image_url:"https://resources.pulse.icc-cricket.com/ICC/photo/2022/07/12/959b6e78-2d5c-4d19-8db4-41ad942b08b1/GettyImages-1408242525.jpg",
        role:"bowler",
        name:"Bumrah",
        

    },

    {
        id:"4",
        Image_url:"https://imgk.timesnownews.com/story/Kumble-bowling-PTI.jpg",
        role:"spinner",
        name:"Anil kumble",
        

    },


]








const Fillterjob=()=>{
// first step console the all values
    const[usertext,setusertext]=useState("");
    const[userlist,setuserlist]=useState(Cricketerslist)


    console.log(usertext)
    console.log(userlist)

    // second step read the all values enter

    const cricketText = (event) =>{
        setusertext(event.target.value)
        const cricketfillter=Cricketerslist.filter((each)=>
        each.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        setuserlist(cricketfillter)

        

    }
    const DeleteUser= id =>{

        const removeItem=userlist.filter(each=>each.id!== id)
        setuserlist(removeItem)


    }




    
    return(
        <div>
            <div>
                <div className="text-center">
                <h4 >Cricketer list</h4>
   
                <input type="search" onChange={cricketText} value={usertext} placeholder="please enter"/>
                
                </div>

                {/* 3rd step maping the all details */}

                {
                    userlist.map((each)=>(
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2 col-12">
                        <div className="text-center" key={each.id}>
                            <img src={each.Image_url} width={150}/>
                            <h4>{each.name}</h4>
                            <h4>{each.roll}</h4>
                            <button onClick={()=>DeleteUser(each.id)}>Delete</button>

                        </div>
                        </div>
                        </div>
                        </div>

                    ))
                }

            </div>
        </div>
    )
}
export default Fillterjob;