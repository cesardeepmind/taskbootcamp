import React from 'react'
import {useLocation, useHistory} from 'react-router-dom'

export default function AboutPage() {

  const location = useLocation();
  const history = useHistory();

  console.log('we are in route', location.pathname);

  const navigate = (path) => {
      history.push(path);
  }

  const goBack = () => {
      history.goBack();
  }

  const goForward = () => {
      history.goForward()
  }


  return (
    <div>
        <h1>About | FAQs</h1>
        <div>
          <button onClick={() => navigate('/')}>Go to Home</button>
          <button onClick={goBack} >Go to Back</button>
          <button onClick={goForward} >Go to Forward</button>

        </div>
    </div>
  )
}
