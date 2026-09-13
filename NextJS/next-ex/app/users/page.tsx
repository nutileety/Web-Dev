import axios from "axios"

export default async function user() { 

    async function users() {
        const res = await axios.get("http://localhost:3000/api/user/details")
        return res.data;
    }

    const userList = await users()
    return <div>
        <h1>The users are</h1>
        <table className="border">
            <thead>
                <tr className="border">
                    {/* <th>Id</th> */}
                    <th>Firstname</th>
                    <th>Lastname</th>
                </tr>
            </thead>
            <tbody>
                {/* {userList.map((user: any) => ( */}
                <tr className="border">
                    {/* <td>{user.id}</td> */}
                    <td>{userList.username}</td>
                    <td>{userList.city}</td>
                </tr>
                {/* ))} */}
            </tbody>          
        </table>
    </div>
}