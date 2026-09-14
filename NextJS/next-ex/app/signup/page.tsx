"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()


    return <div className="flex flex-col flex-1 justify-center items-center">
        <div className="flex rounded flex-col gap-2  m-2 p-4 bg-amber-100 text-black">
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
        </div>
        <div>
            <button onClick={async () => {
                await axios.post('http://localhost:3000/api/user/details' , {
                    username,
                    password
                })
                router.push('/signin')
            }}>Sign Up</button>
        </div>
    </div>
}