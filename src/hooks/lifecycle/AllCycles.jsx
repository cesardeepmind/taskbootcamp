import React, {useEffect} from 'react'

export default function AllCycles() {

    useEffect(() => {
      console.log('Componente actualizado');
        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualizacion de component');
        }, 1000)

      return () => {
        console.log('Componente va desaparecer');
        document.title = "Tiempo detenido"
        clearInterval(intervalID);
      }
    }, [])
    
  return (
    <div>AllCycles</div>
  )
}