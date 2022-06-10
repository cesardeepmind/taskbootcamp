import React from 'react'

export default function AsyncExample() {

    async function generateNumber() {
        return 1;
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2)
    }

    function obtainNumber(){
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Error: ${error}`))
    }

    function obtainPromiseNumber(){
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Error: ${error}`))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value)

        return Promise.resolve(sessionStorage.getItem(key))
    }


    function showStorage(){
        saveSessionStorage('name', 'Cesar')
            .then((response) => {
                let value = response
                alert(`Save name: ${value}`)
            })
            .catch((error) => {
                alert(`Something Error: ${error}`)
            })
            .finally(() => console.log('SUCCESS: Name saved and  retreived'))
    }

    async function obtainMessage(){
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello')
            }, 2000)
        })

        let message = await promise;

        await alert(`Message received: ${message}`)
    }

    const returnError = async() => {
        await Promise.reject(new Error('Oops! Something went wrong'))
    }

    const consumeError = async() => {
        returnError()
            .then((response) => alert(`Everything is ok: ${response}`))
            .catch((error) => alert(`Something Error: ${error}`))
            .finally(() => alert('Finally executed'))
    }

    const urlNotFound = async() => {
        try {
            let response = await fetch('https://invalidURL')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something wen wrong with your URL: ${error} (check your console)`)
        }

    }

    const multiplePromises = async() => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users/'),
                fetch('https://reqres.in/api/users?page=2'),
            ]
        ).catch((error) => alert(`Something wen wrong with your URL: ${error} (check your console)`))
    }

  return (
    <div>
        <button onClick={obtainNumber}>Obtain Number</button>
        <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
        <button onClick={showStorage}>Show Storage</button>
        <button onClick={obtainMessage}>Obtain Message in 2seg</button>
        <button onClick={consumeError}>Consume Error</button>
        <button onClick={urlNotFound}>URL Not Found</button>
        <button onClick={multiplePromises}>Multiple Promises</button>
    </div>
  )
}
