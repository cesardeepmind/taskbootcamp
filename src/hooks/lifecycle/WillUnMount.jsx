/**
 * Ejemplo de uso de metodo con class component y hook
 */

import React, { Component, useEffect } from 'react'
export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }


  render() {
    return  (
    <div>WillUnMount</div>
    )
  }
}

export const WillUnMountHook = () =>{

useEffect(() => {

  return () => {
    console.log('Comportamiento antes de que el componente desaparezca');
  }
}, [])



return (
      
    <div>WillUnMount</div>
  )
}
