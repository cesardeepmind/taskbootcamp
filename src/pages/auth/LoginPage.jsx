import React from 'react'
import Loginformik from '../../components/pure/forms/loginFormik'

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


function LoginPage() {
  return (
    <div>
        <h1>Login Page</h1>
        <Loginformik />

        <Typography variant='body2' color='GrayText' align='center'>
          <Link color='inherit' href='/register'>
            Register
          </Link>
        </Typography>
    </div>
  )
}

export default LoginPage