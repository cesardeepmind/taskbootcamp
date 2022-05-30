import React, {useState} from 'react'


//estilo para usuario logueado
const loggedStyle = {
    color: 'white'
}

//estilo para no login
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}




export const GreetingStyled = (props) => {

    //estado para controlar si esta logueado

    const [logged, setLogged] = useState(false)



  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
        {logged 
            ?
                ( <p>Hola, {props.name}</p>)
            : 
                (<p>Please Login</p>)}
       
        <button onClick={() => {
            console.log('Boton pulsado');
            setLogged(!logged);
        }}>
            {logged ? 'Logout' : 'Login'}
        </button>

    </div>
  )
}
