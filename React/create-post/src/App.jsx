import { useState } from "react"
import { PostComponent } from "./post";
// import { ProfileCard } from "./profile-card";

function NewPost() {
  const [post, setPost] = useState([]);

  const newPost = post.map(() => {
    <PostComponent />
  })

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}> post </button>
    </div>
  )
}

function App() {

  return (
    <div style={{backgroundColor:"#dfe6e9", hieght:"100vh", display:"flex"}}>
      <div>
        {/* <ProfileCard imgAddress={"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"}/> */}
        <div style={{marginLeft:20}}>
          <NewPost />
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div style={{width:700}}>
          <div>
            <PostComponent 
              profile={"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"}
              name={"1000x devs"}
              subtitle={"5000 followers"}
              time={"12 mins "}
              description={"The roadmap to achieve the web3 in 2025."}
            />
          </div>
          <div>
            <PostComponent 
              profile={"https://imgs.search.brave.com/ZACv93qZO57A2RrexnAjJi9CTpejuyu2aIGeB9-2beA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTk0/OTM2My5qcGc"}
              name={"Unknown coder"}
              subtitle={"4500 followers"}
              time={"10 mins "}
              description={"Finally the Goal had Accomplished!"}
            />
          </div>
          <div>
            <PostComponent 
              profile={"https://imgs.search.brave.com/F5OoHgfmJlOgbB00VWzyvvcxuQZk7JOPrCYV51JMmNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/Mzc5NDUyL3Bob3Rv/L2tpdHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13UWcw/TXdTcXJxZkkzWHdN/WGREVjhkY2RZMlNH/WVh2YndPdE12cUxX/UWpJPQ"}
              name={"Code Assassin"}
              subtitle={"Promoted"}
              description={"The mastering the cooding is the Beautiful journey."}
            />
          </div>
        </div>
      </div>
    </div>
  )
  
}




export default App
