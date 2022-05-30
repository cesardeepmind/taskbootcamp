import React, {useState} from 'react';

//login logout buttons
const LoginButton = ({loginAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

let red = 0;
let green = 200;
let blue = 150;
 //estilo para usuario logueado
 const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white'
}

//estilo para no login
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}



const Optionalrender = () => {

    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [access, setAccess] = useState(false  );
    const [Nmessage, setNmessage] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () =>{
        setAccess(true)
    }

    const logoutAction = () =>{
        setAccess(false)
    }

    let optionalButton;

    // if (access){
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // } else {
    //     optionalButton = <button onClick={updateAccess}>Login</button>
    // }

    if (access) {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction} />
    } else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction} />
    }

   

    //unread messages
    let addMessages = () => {
        setNmessage(Nmessage + 1)
    }




  return (
    <div>
        {/* optional button */}
        { optionalButton }
        {/* Nmessages unread */}
        {/* { Nmessage > 0 && Nmessage === 1 && <p>You have {Nmessage} new message...</p> }
        { Nmessage > 1 && <p>You have {Nmessage} new messages...</p> }
        {Nmessage === 0 && <p>There are no new messages</p>} */}
        {/* Ternay Operator */}
        {access ? (<div>
            { Nmessage > 0 ? 
            <p>You have {Nmessage} new messages{Nmessage > 1 ? 's' : null}</p> : 
            <p>There are no new messages</p>}
            <button onClick={addMessages}>{Nmessage ===0 ? 'Add your first message' : 'Add new message'}</button>
        </div>) : null}
        
        
    </div>
       
  )
}

export default Optionalrender