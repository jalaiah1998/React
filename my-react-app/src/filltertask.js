
// import React, { useState } from "react";

// const Movie = () => {
//     const json = [
//         {
//             date: "20-01-2020",
//             imageurl: "https://www.goldderby.com/wp-content/uploads/2022/12/RRR.jpg?w=620",
//             title: "RRR",
//             rating: "5.0"
//         },
//         {
//             date: "21-02-2022",
//             imageurl: "https://www.pinkvilla.com/pics/480x480/mehabooba_song__202209.jpg",
//             title: "Kgf",
//             actor: "yash",
//             rating: "4.0"
//         },
//         {
//             date: "22-02-2022",
//             imageurl: "https://upload.wikimedia.org/wikipedia/en/9/90/Gabbar_singh_poster.jpg",
//             title: "gabarsingh",
//             actor: "pavan"
//         },


//         {
//             date: "21-04-2023",
//             imageurl: "https://m.media-amazon.com/images/M/MV5BZjFiMDljZmItZjE1Ny00ZDAyLTlkNDktNmExYTc1YmJhYmJmXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_.jpg" ,
//             title: "pokiri",
//             actor: "mahesh"
//         }




//     ];

//     const [blogs, setBlogs] = useState(json);
//     const [blog1,setBlog1]=useState(json)
//     const [date1, setdate1] = useState('');
//     const [date2, setdate2] = useState('');

//     const handleFilter = () => {
//         const filteredBlogs = blogs.filter((job) => {
//             const jobDate = new Date(job.date);
//             const fillterDate1 = new Date(date1);
//             const fillterDate2 = new Date(date2);

//             return jobDate >= fillterDate1 && jobDate <= fillterDate2;

//         });



//         setBlog1(filteredBlogs);
//         console.log(filteredBlogs,"ftytftt");





//     }
//     return (
//         <div>
//             <div className="text-center">

//                 <div>
//                     <label>from</label>
//                     <input type="date" onChange={(e)=>setdate1(e.target.value)} value={date1} placeholder="dd/mm/yy" />
//                     <label>To</label>
//                     <input type="date" onChange={(e)=>setdate2(e.target.value)} value={date2}  placeholder="dd/mm/yy" />
//                     <button onClick={()=>handleFilter()}>Submitt</button>
//                 </div>



//             </div>

//             {

//                 blog1.map((each) => (
//                     <div className="text-center" key={each.date}>
//                         <img src={each.imageurl} width={120} />
//                         <h3>{each.title}</h3>
//                         <h3>{each.rating}</h3>
//                         <h3>{each.date}</h3>
//                     </div>
//                 ))
//             }




//         </div>
//     )
// }


// export default Movie;





import React, { useState } from "react";

const Movie = () => {
  const json = [
    {
      date: "20-01-2020",
      imageurl:
        "https://www.goldderby.com/wp-content/uploads/2022/12/RRR.jpg?w=620",
      title: "RRR",
      rating: "5.0",
    },
    {
      date: "21-02-2022",
      imageurl:
        "https://www.pinkvilla.com/pics/480x480/mehabooba_song__202209.jpg",
      title: "Kgf",
      actor: "yash",
      rating: "4.0",
    },
    {
      date: "22-02-2022",
      imageurl:
        "https://upload.wikimedia.org/wikipedia/en/9/90/Gabbar_singh_poster.jpg",
      title: "gabarsingh",
      actor: "pavan",
    },
    {
      date: "21-04-2023",
      imageurl:
        "https://m.media-amazon.com/images/M/MV5BZjFiMDljZmItZjE1Ny00ZDAyLTlkNDktNmExYTc1YmJhYmJmXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_.jpg",
      title: "pokiri",
      actor: "mahesh",
    },
  ];

  const [blogs, setBlogs] = useState(json);
  const [date1, setdate1] = useState('');
  const [date2, setdate2] = useState('');

  const handleFilter = () => {
    if (!date1 || !date2) {
      // Handle the case where one or both date fields are empty
      console.log("Please select both 'from' and 'to' dates.");
      return;
    }

    const filteredBlogs = blogs.filter((movie) => {
      const movieDateParts = movie.date.split('-');
      const movieDate = new Date(
        `${movieDateParts[2]}-${movieDateParts[1]}-${movieDateParts[0]}`
      );
      const filterDate1 = new Date(date1);
      const filterDate2 = new Date(date2);

      return movieDate >= filterDate1 && movieDate <= filterDate2;
    });

    setBlogs(filteredBlogs);
  };

  return (
    <div>
      <div className="text-center">
        <div>
          <label>From</label>
          <input
            type="date"
            onChange={(e) => setdate1(e.target.value)}
            value={date1}
            placeholder="dd/mm/yyyy"
          />
          <label>To</label>
          <input
            type="date"
            onChange={(e) => setdate2(e.target.value)}
            value={date2}
            placeholder="dd/mm/yyyy"
          />
          <button onClick={handleFilter}>Submit</button>
        </div>
      </div>

      {blogs.map((movie) => (
        <div className="text-center" key={movie.date}>
          <img src={movie.imageurl} width={120} alt={movie.title} />
          <h3>{movie.title}</h3>
          <h3>{movie.rating}</h3>
          <h3>{movie.date}</h3>
        </div>
      ))}
    </div>
  );
};

export default Movie;
