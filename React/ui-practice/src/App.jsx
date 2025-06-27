import { useState } from "react"
function App() {

  return (
    <div style={{backgroundColor:"#dfe6e9", hieght:"100vh", display:"flex"}}>
      <div>
        <ProfileCard imgAddress={"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"}/>
        <div style={{marginLeft:20}}>
          <Toggling />
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

function PostComponent({name, profile, subtitle, time, description}) {
  const style = { 
    backgroundColor:"white", 
    borderRadius:10, 
    margin:20,
    padding:30,
  }
  
  return (
    <div style={style}>
      <div style={{display:"flex"}}>
        <img src={profile} style={{width: 40, height:40, borderRadius:40}}/>
        <div style={{fontSize: 14, marginLeft:10}}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time !== undefined && <div style={{display:"flex"}}>
            <div>
              {time}
            </div>
            <div>
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuieoGNBI4EumVrnwb7gaK2IFLl3EhUfkcAw&s"} style={{height:12, width:12, marginLeft:3}} />
            </div>
          </div>
          }
        </div>
      </div>
      <br />
      <div style={{ fontSize: 16 }}>
        {description}
      </div>
    </div>
  )
}

function ProfileCard(props) {
  return (
    <div style={{backgroundColor:"white", margin:20, borderRadius:10,height:250, justifyItems:"center", textAlign:"center"  }}>
      <div style={{width:300, backgroundColor:"#666669",height:50, borderTopLeftRadius:10, borderTopRightRadius:10, marginTop:20}}>     
        <div>
          <img src={props.imgAddress} style={{ width:80, height:80, borderRadius:80 }}/>
        </div>
        <div>
          <div style={{fontWeight: "bold", fontSize:20 }}>1000x dev</div>
          <div style={{fontSize:20}}>Works with XXX</div>
          <hr />
          <div style={{fontSize:16, textAlign:"justify", padding:20}}>
            <table>
              <tr >
                <th style={{ textAlign: "left" }}>Profile Viewers</th>
                <td style={{ textAlign: "right" }}>13600</td>
              </tr>
                <th style={{ textAlign: "left" }}>Profile Impression</th>
                <td style={{ textAlign: "right", paddingLeft:40}}>4500</td>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function Toggling() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}> toggle </button>
      {isVisible && <div> The text is toggled now. Click again to disappear </div>}
    </div>
  )
}

export default App
