import React , {useEffect , useState} from "react"
import axios from "axios"

const UserList = () => {
const [users , setUsers] = useState([])

useEffect(() => {
 

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setUsers(res.data))
    .catch(err =>{
        console.log(err)
    })
})
const items = users.map(item =>  <h2 key={item.id}>Name: {item.name}</h2>)
    return (  <div>
     {items}
    </div>);
}
 
export default UserList;