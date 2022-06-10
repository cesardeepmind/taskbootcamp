import React from 'react'
import RegisterFormik from '../../components/pure/forms/RegisterFormik'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function RegisterPage() {
  return (
    <div>
        <h1>Register Page</h1>
        <RegisterFormik />
        <Typography variant='body2' color='GrayText' align='center'>
          <Link color='inherit' href='/login'>
            Login
          </Link>
        </Typography>
    </div>
  )
}
