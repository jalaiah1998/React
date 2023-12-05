import { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  const [blogsList, setBlogsList] = useState([]);
  const [selectedBlog, setselectedBlog] = useState(null);

  useEffect(() => {
    ftechBlogs()
  }, [])

  const ftechBlogs = async () => {
    const api = "https://apis.ccbp.in/blogs";

    const response = await axios.get(api)

    setBlogsList(response.data)

  }

  const onClickBlogDetails = async (blogId) => {
    const api = `https://apis.ccbp.in/blogs/${blogId}`
    const response = await axios.get(api)
    setselectedBlog(response.data)

  }

  console.log(blogsList);
  console.log(selectedBlog);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Blog List</h1>

        </div>

        <ul className="col-md-4">
          {blogsList.map((blog) =>

            <div className={`d-flex flex- mb-2 blogs_contaier ${selectedBlog && selectedBlog.id===blog.id ? "selected":''}`}
              onClick={((e) => onClickBlogDetails(blog.id))}>
              <img src={blog.image_url} alt={blog.title} className='w-50 image_url' />
              <div className='d-flex flex-column'>
                <p>{blog.toppic}</p>
                <div className='d-flex'>
                  <img src={blog.avatar_url} alt='{blog.author}' className='avatar_url' />

                </div>



              </div>


            </div>

          )}

        </ul>
        <div className="col-md-8">
          {selectedBlog &&
            <div className='d-flex flex-column'>
              <h2>{selectedBlog.title}</h2>
              <div className='d-flex justify-content-start align-items-center'>
                <img src={selectedBlog.avatar_url} alt={selectedBlog.author} className='w-25'/>
                <p>{selectedBlog.author}</p>
              </div>
              <img src={selectedBlog.image_url} alt={selectedBlog.title} className='w-75 m-1' />
              <p>{selectedBlog.content}</p>
            </div>}


        </div>
      </div>


    </div>


  )


}
export default App;