import { useState } from "react"
import { PostComponent } from "./post";
import { ProfileCard } from "./profile-card";

function App() {
  const [post, setPost] = useState([]);

  function addPost() {
    setPost([...post, {
      profile: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
              name: "1000x devs",
              subtitle: "5000 followers",
              time: "12 mins ",
              description: "The roadmap to achieve the web3 in 2025.",
    }])
  }

  const postComponents = post.map((post) => (
    <PostComponent 
      profile = {post.profile}
      name = {post.name}
      subtitle = {post.subtitle}
      time = {post.time}
      description = {post.description}
    />
  ))

  return (
    <div style={{backgroundColor:"#dfe6e9", hieght:"100vh", display:"flex"}}>
      <div>
        <ProfileCard imgAddress={"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"}/>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div style={{width:700}}>
          <div style={{margin:20}}>
            <button onClick={addPost}> post </button>
          </div>
          {postComponents}
        </div>
      </div>
    </div>
  )
  
}




export default App
