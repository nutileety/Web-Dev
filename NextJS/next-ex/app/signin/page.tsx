"use client"
import axios from "axios";
import { useState } from "react"

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return <div className="flex flex-col flex-1 justify-center items-center">
        <div className="flex rounded flex-col gap-2  m-2 p-4 bg-amber-100/80 text-black">
            <label>username</label>
            <input className="border rounded p-2" type="text" 
            placeholder="ex:abc@gmail.com" onChange={e => {
                setUsername(e.target.value)
            }}/>
            <label>password</label>
            <input className="border rounded p-2" type="password" 
            placeholder="password" onChange={e => {
                setPassword(e.target.value)
            }}/>
            <div className="bg-black text-amber-100 rounded p-2 text-center ">
            <button onClick={async () => {
                await axios.get('http://localhost:3000/api/user/details')
            }}>Sign In</button>
        </div>
        </div>
        
    </div>
}