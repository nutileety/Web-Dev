
function App() {
  const imgAddress = "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"

  return (
    <div style={{backgroundColor:"#dfe6e9", hieght:"100vh", display:"flex"}}>
      <div>
        <ProfileCard imgAddress={imgAddress}/>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div>
          <div>
            <PostComponent imgAddress={imgAddress} />
          </div>
          <div>
            <PostComponent imgAddress={imgAddress} />
          </div>
          <div>
            <PostComponent imgAddress={imgAddress} />
          </div>
        </div>
      </div>
    </div>
  )
  
}

function PostComponent(props) {
  const style = {
    width:"250", 
    backgroundColor:"white", 
    borderRadius:10, 
    margin:20,
    padding:30,
  }
  
  return (
    <div style={style}>
      <div style={{display:"flex"}}>
        <img src={props.imgAddress} style={{width: 40, height:40, borderRadius:40}}/>
        <div style={{fontSize: 14, marginLeft:10}}>
          <b>1000x devs</b>
          <div>24999 followers</div>
          <div>14 mins</div>
        </div>
      </div>
      <div style={{ fontSize: 14 }}>
        What to know how to win big? Check out how these folks won $6000 in bounties.
      </div>
    </div>
  )
}

function ProfileCard(props) {
  return (
    <div style={{backgroundColor:"white", margin:20, borderRadius:10,height:250, justifyItems:"center", textAlign:"center"  }}>
      <div style={{width:250, backgroundColor:"#666669",height:50, borderTopLeftRadius:10, borderTopRightRadius:10, marginTop:20}}>     
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

export default App
