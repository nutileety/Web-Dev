import axios from "axios";

export default async function BLogPage({params}: any) {
    const pageId = (await params).blogId;

    const response = await axios.get(`https://jsonplaceholder.org/users/${pageId}`);
    const data = response.data

    return <div>
        <h1> {data.firstname} </h1>
        {/* <div>
            {data.address.map((address) => (
                <h3>{address.street} </h3>
                <h3>{address.city} </h3>
                <h3>{address.zipcode} </h3>
            ))}
        </div> */}
        <div>
            <h3>{data.address?.street}</h3>
            <h3>{data.address?.city}</h3>
            <h3>{data.address?.zipcode}</h3>
        </div>       
    </div>

}