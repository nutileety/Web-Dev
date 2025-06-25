
function App() {
  return (
    <div style={{backgroundColor:"#dfe6e9", hieght:"100vh"}}>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div>
          <div>
            <PostComponent />
          </div>
          <div>
            <PostComponent />
          </div>
          <div>
            <PostComponent />
          </div>
        </div>
      </div>
    </div>
  )
  
}

function PostComponent() {
  const style = {
    width:"250", 
    backgroundColor:"white", 
    borderRadius:10, 
    margin:20,
    padding:30,
  }
  const imgAddress = "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"

  return (
    <div style={style}>
      <div style={{display:"flex"}}>
        <img src={imgAddress} style={{width: 40, height:40, borderRadius:40}}/>
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

export default App
