export function ProfileCard(props) {
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
