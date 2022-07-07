import React, {useState, useEffect} from 'react'
import { getAllUsers, getAllPageUsers, getUserDetail, login } from '../../services/fetchService'

export default function FetchExample() {

    const [users, setUsers] = useState([]);
    const [selectUser, setSelectUser] = useState(null)
    const [totalUsers, setTotalUsers] = useState(12);
    const [pages, setPages] = useState(2);
    const [usersPerPage, setUsersPerPage] = useState(6);

    useEffect(() => {
       obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then(response => {
                console.log('All users', response.data);
                setUsers(response.data);
                setUsersPerPage(response.per_page);
                setTotalUsers(response.total);
                setPages(response.total_pages);
            })
            .catch(error => {
                alert('Error', error);
            })
            .finally(() => {
                console.log('Ended obtaining users')
                console.table(users);
            })
    }

    const obtainPageUsers = (page) => {
        getAllPageUsers(page)
            .then(response => {
                console.log('All page users', response.data);
                setUsers(response.data);
                setUsersPerPage(response.per_page);
                setTotalUsers(response.total);
                setPages(response.total_pages);
            })
            .catch(error => {
                alert('Error', error);
            })
            .finally(() => {
                console.log('Ended obtaining users')
                console.table(users);
            })
    }

    const obtainUserDetails = (id) => {
        getUserDetail(id)
            .then(response => {
                console.log('User details', response.data);
                setSelectUser(response.data);
            })
            .catch(error => {
                console.log('Error', error);
            })
            .finally(() => {
                console.log('Ended obtaining users')
                console.table(selectUser);
            })
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then(response => {
                console.log('TOKEN', response.token);
                sessionStorage.setItem('token', response.token);
            })
            .catch(error => {
                console.log('Error', error);
            })
            .finally(() => {
                console.log('Ended login users')
            })

    }

  return (
    <div>
        {/* boton simulate login */}
        <button onClick={authUser}>Login</button>
        {/* boton simulate login */}
        <h1>Fetch Example</h1>
        {
            users.map((user, index) => 
                (<p key={index} onClick={() => obtainUserDetails(user.id)}>
                    {user.first_name} {user.last_name}
                </p>)
            )
        }
        <p>Showing {usersPerPage} users of {totalUsers} in total</p>
        <button onClick={() => obtainPageUsers(1)}>
            1
        </button>
        <button onClick={() => obtainPageUsers(2)}>
            2
        </button>
        <div>
            { selectUser != null ?
                (
                    <div>
                         <h2>User details</h2>
                        <p>Name: {selectUser.first_name}</p>
                        <p>Last name: {selectUser.last_name}</p>
                        <p>Email: {selectUser.email}</p>
                        <img alt='Avatar' src={selectUser.avatar} style={{height: '150px', width: '150px'}} />
                    </div>
                ) :
                (<h6>Please click on a User to see its details</h6>) 
            }
        </div>
    </div>
  )
}
