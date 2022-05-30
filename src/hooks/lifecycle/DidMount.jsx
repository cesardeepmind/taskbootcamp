/**
 * Ejemplo de uso del metodo del ciclo de vida
 *  y el hook de ciclo de vida en component funcional
 */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido a DOM');
    }

  render() {
    return (
      <div>DidMount</div>
    )
  }
}


export const DidmountHook= () => {

    useEffect(() => {
      console.log('Comportamiento antes de que el componente sea añadido a DOM');
    }, [])
    


  return (
    <div>DidMount</div>
  )
}
