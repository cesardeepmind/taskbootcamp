import axios from "axios";

/**
 * LOGIN METHOD TO reqResponse endpoint
 * @param {string} email 
 * @param {string} password 
 */

export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    //return the response with a Promise
    return axios.post("https://reqres.in/api/login", body)
}

// Obtain all user

export const getAllUsers = () => {
    return axios.get("https://reqres.in/api/users")
}

// Obtain all page users
export const getAllPageUsers = (page) => {
    return axios.get(`https://reqres.in/api/page=${page}`)
}

// Obtain USER id
export const getUsersByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

// Create USER
export const createUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }

    return axios.post("https://reqres.in/api/users", body)
}

// Update USER
export const updateUserByID = (id, name, job) => {
    let body = {
        name: name,
        job: job
    }

    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

// Delete USER
export const deleteUserByID = (id) => {
    
    return axios.delete(`https://reqres.in/api/users/${id}`)
}