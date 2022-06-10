import React, {useState, useEffect} from 'react'
import { getAllUsers } from '../../services/fetchService'

export default function FetchExample() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
       obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then(response => {
            console.log('datos', response.data);
            setUsers(response.data);
        })
        .catch(error => {
            alert('Error', error);
        })
        .finally(() => {
            console.log('Ended obtaining users')
            console.table(users);
        })
    }

  return (
    <div>
        <h1>Fetch Example</h1>
        {
            users.map((user, index) => {
                return (<p key={index}>{user.first_name} {user.last_name}</p>)
            })
        }
    </div>
  )
}
