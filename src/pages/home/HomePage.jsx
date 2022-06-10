import React from 'react'
import {useLocation, useHistory} from 'react-router-dom'


export default function HomePage() {
  const location = useLocation();
  const history = useHistory();

  console.log('we are in route', location.pathname);

  const navigate = (path) => {
      history.push(path)
  }

  const navigateProps = (path) => {
    history.push({
      pathname: path,
      search: '?online=true', //query params
      state: {
        online: true
      }
    })
  }


  return (
    <div>
        <h1>Home Page</h1>
        <div>
          <button onClick={() => navigate('/profile')}>Go to Profile</button>
          <button onClick={() => navigateProps('/online-state')} >Go to Page with State / Query params</button>
          

        </div>
    </div>
  )
}
