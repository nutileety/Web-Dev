
import { useEffect, useRef, useState } from 'react'
import './App.css'

export default function App() {
  const [socket, setSocket] = useState()
  const inputRef = useRef();
  
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    // @ts-ignore
    setSocket(ws)

    ws.onmessage = (e) => {
      alert(e.data)
    }
    ws.close = (e) => {
      alert(e.data)
    }

  }, [])

  function sendMessage(){
    const message = inputRef.current.value;
    // @ts-ignore
    socket.send(message)
  }

  return <div>
    <input ref={inputRef} type='text' />
    <button onClick={sendMessage}>send</button>
  </div>
}