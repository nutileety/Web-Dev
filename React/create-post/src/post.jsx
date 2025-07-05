export function PostComponent({name, profile, subtitle, time, description}) {
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