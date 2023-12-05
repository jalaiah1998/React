import React, { useState } from "react";


const weatherDetails = [
    {

        id: "1",
        Image_url: "https://nordicapis.com/wp-content/uploads/6-Best-Free-and-Paid-Weather-APIs.png",
        day: "monday"
    },

    {
        id: "2",
        Image_url: "https://newsonair.gov.in/writereaddata/News_Pictures/MIS/2022/May/NPIC-20225117581.jpg",
        day: "tuesday"
    },

    {
        id: "3",
        Image_url: "https://img.freepik.com/free-vector/weather-element-clipart-vector-set-flat-design_53876-135909.jpg",
        day: "wednesday"
    },

    {
        id: "4",
        Image_url: "https://images1.livehindustan.com/uploadimage/library/2023/03/29/16_9/16_9_6/bihar_weather_news_1680095838.jpg",
        day: "thursday"
    }



]
const Weather = ()=> {

    const [usertext, setusertext] = useState("");
    const [weatherlist, setweatherlist] = useState(weatherDetails)
    const [imagelist1,setimagelist1]=useState([]);

    
const handleFilter = () => {

    const fillter =weatherlist.filter((job)=>
    job.id.toLowerCase().includes(imagelist1.toLowerCase())
        )

    
    
    setweatherlist(fillter);
    
}





 return (
        <div>
            <div>
                <h4>weather details</h4>
             <input type="text" value={imagelist1} onChange={(e)=>setimagelist1(e.target.value)}   />
             <button onClick={handleFilter}>submitt</button>

            </div>
            {
                weatherlist.map((each)=>(
                    <div key={each.id}>
                        <img src={each.Image_url} width={120}  ></img>
                        <h3>{each.day}</h3>


                    </div>

                ))
            }



        </div>
    )
}
export default Weather;