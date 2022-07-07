import React, { useState, useEffect } from 'react'
import { getRandomUser } from '../../services/axiosService'


export default function AxiosExample() {

    const [user, setUser] = useState(null)

    useEffect(() => {
      obtainUser()
    }, [])
    
    const obtainUser = () => {
        getRandomUser()
        .then(res => {
            if(res.status === 200) {
                setUser(res.data.results[0])
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <div>
        <h1>Axios Example</h1>
        {
            user != null ?
            (
                <div>
                    <img src={user.picture.large} alt="Avatar"/>
                    <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                    <h3>{user.email}</h3>
                </div>
            )
            : null }
            
            <div>
                <p>Generate a new User</p>
                <button onClick={obtainUser}>Random User</button>
            </div>

    </div>
  )
}


