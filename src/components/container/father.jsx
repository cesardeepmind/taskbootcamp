import React, {useState} from 'react'
import Child from '../pure/child'

export default function Father() {

  const [name, setName] = useState('Cesar')

  function showMessage (text) {
    alert(`Message received: ${text}`)
  }

  function updateName (newName){
    setName(newName)
  }


  return (
    <div style={{background: 'tomato', padding: '10px'}}>
        <Child name={name} send={showMessage} update={updateName} />
    </div>
  )
}
