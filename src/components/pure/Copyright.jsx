import React from 'react'

//material ui components
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function Copyright() {
  return (
    <Typography variant='body2' color='GrayText' align='center'>
        { 'Copyright (C) ' }
        <Link color='inherit' href='#'>
            Cesar <FavoriteBorderIcon />
        </Link>
        { ' ' }
        { new Date().getFullYear() }
    </Typography>
  )
}
