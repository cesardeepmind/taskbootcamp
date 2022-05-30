/**
 * Componente que va a contener un formulario para
 * autenticacion de usuarios
 */

import React, {useState} from 'react'

export default function loginForm() {

    const initialCredentials = [
        {
          user: '',
          password: ''
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);


  return (
    <div>loginForm</div>
  )
}
