import React from 'react'
import {useHistory} from 'react-router-dom'

export default function NotFoundPage() {

  const history = useHistory();

  const navigateTo = (path) => {
      history.goBack(path)
  }


  return (
    <div>
        <h1>404 - Page Not Found</h1>
        <button onClick={() => navigateTo('/')}>Go To Home</button>
    </div>
  )
}
