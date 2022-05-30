/**
 * Ejemplo de uso de metodo DidUpdate en componente class
 * y uso de hook component funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe unos props o cambia en su estado');
    }

  render() {
    return (
      <div>DidUpdate</div>
    )
  }
}

export const DidupdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe unos props o cambia en su estado');
    });
    
    return (
        <div>DidUpdate</div>
    )
}

