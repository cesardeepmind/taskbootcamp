import React from 'react'
import {useHistory} from 'react-router-dom'
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';

export default function DashBoard() {

  const history = useHistory();

  const logout = () => {
    history.push('/login');
  }
  
  const goTo = () => {
    history.push('/tasks');
  }


  return (
    <div>
        <Button variant="contained" onClick={logout}>Logout</Button>
        <Button variant="contained" onClick={goTo}>Tasks</Button>
        <Copyright />
    </div>
  )
}
