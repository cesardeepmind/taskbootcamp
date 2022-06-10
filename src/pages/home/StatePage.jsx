import React from 'react'
import { useLocation } from 'react-router-dom'

export default function StatePage() {
  const location = useLocation();

  console.log('Location STATE: ',location.state.online);
  console.log('Query Params: ',location.search);

  return (
    <div>
      <h1>State: {location.state.online ? 'The user is online' : 'The user is Offline'}</h1>
    </div>
  )
}
