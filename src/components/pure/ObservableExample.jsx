import React, {useState} from 'react'
import { getNumbers } from '../../services/observableexample'

export default function ObservableExample() {

    const [number, setNumber] = useState(0);


    const obtainNumbers = () => {

        console.log('subscribing to observable');

        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log(newNumber);
                    setNumber(newNumber);
                },
                error(err){
                    alert(`Error: ${err}`);
                    console.log('Error in observable');
                },
                complete(){
                    alert(`Completed: ${number}`);  
                    console.log('Done');
                }

            }
        )
        console.log('Finished subscribing to observable');
    }

  return (
    <div>
        <h2>Number: {number}</h2>
        <button onClick={obtainNumbers}>Obtain Numbers</button>
    </div>
  )
}
