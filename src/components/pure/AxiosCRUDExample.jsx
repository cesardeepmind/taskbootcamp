import React from 'react'
import { getAllPageUsers, createUser, updateUserByID, deleteUserByID, getAllUsers, getUsersByID, login } from '../../services/axiosCRUDService'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email').required('Email Required'),
        password: Yup.string().required('Password Required'),
    }
)

export default function AxiosCRUDExample() {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const authUser = (values) => {
        login(values.email, values.password)
            .then(res => {
                if(res.data.token){
                    alert(JSON.stringify(res.data))
                    sessionStorage.setItem('token',res.data.token)
                } else {
                    sessionStorage.removeItem('token')
                    throw new Error('Invalid credentials')
                }
                
            })
            .catch(err => {
                alert(`Something went wrong: ${err}`)
                sessionStorage.removeItem('token')
            })
            .finally(() => console.log('Login done'))
            
    }

    //CRUD EXAMPLE
    const obtainAllUsers = () => {
        getAllUsers()
            .then(res => {
                if(res.data.data && res.status === 200){
                    alert(JSON.stringify(res.data.data))
                } else {
                    throw new Error(`No Users found`)
                }
            })
            .catch(err => {
                alert(`Something went wrong: ${err}`)
            })
    }

    const obtainAllPageUsers = (page) => {
        getAllPageUsers(page)
            .then(res => {
                if(res.data.data && res.status === 200){
                    alert(JSON.stringify(res.data.data))
                } else {
                    throw new Error(`No Users found in page ${page}`)
                }
            })
            .catch(err => {
                alert(`Something went wrong: ${err}`)
            })
    }
    
    const obtainUserByID = (id) => {
        getUsersByID(id)
            .then(res => {
                if(res.data.data && res.status === 200){
                    alert(JSON.stringify(res.data.data))
                } else {
                    throw new Error('User not found')
                }
            })
            .catch(err => {
                alert(`Something went wrong: ${err}`)
            })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then(res => {
                if(res.data && res.status === 201){
                    alert(JSON.stringify(res.data))
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .catch(err => {
                alert(`Something went wrong: ${err}`)
            })
    }

    const updateUser = (id, name, job) => {
        updateUserByID(id, name, job)
            .then(res => {
                if(res.data && res.status === 200){
                    alert(JSON.stringify(res.data))
                } else {
                    throw new Error('User not found & no update done')
                }
            })
            .catch(err => {
                alert(`Something went wrong: ${err}`)
            })
    }

    const deleteUser = (id) => {
        deleteUserByID(id)
            .then(res => {
                if(res.data && res.status === 204){
                    alert(`User with id ${id} successfully deleted`)
                } else {
                    throw new Error('User not found & no delete done')
                }
            })
            .catch(err => {
                alert(`Something went wrong: ${err}`)
            })
    }
    

  return (
    <div>
        <h4>Login Formik</h4>
        <Formik
            // initial values tha the form will take
            initialValues={ initialCredentials }
            // Yup validation schema
            validationSchema={ loginSchema }
            // onSubmit event
            onSubmit={async (values) => {
                authUser(values)
            }}
        >
            {/* we obtain props from formik */}

            {({ values,
                errors,
                touched,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="example@email.com"
                        type="email"
                    />
                    {/* email errors */}
                    {errors.email && touched.email && 
                        (
                            // <div className="error"><p>{errors.email}</p></div>
                            <ErrorMessage name="email" component='div' />
                        )
                    }

                    <label htmlFor="password">Password</label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="password"
                        type="password"
                    />
                    {/* password errors */}
                    {errors.password && touched.password &&
                        (
                            // <div className="error"><p>{errors.password}</p></div>
                            <ErrorMessage name="password" component='div' />
                        )
                    }

                    <button type="submit">Login</button>
                    {isSubmitting ? (<p>Login your credentials...</p>) : null}

                </Form>
                )

            }
       
        </Formik>
        <div>
            <button onClick={obtainAllUsers}>Obtain all users</button>
            <button onClick={() => obtainAllPageUsers(1)}>Obtain all page users</button>
            <button onClick={() => obtainUserByID(1)}>Obtain user by ID</button>
            <button onClick={() => createNewUser('morpheus', 'leader')}>Create new user</button>
            <button onClick={() => updateUser(1, 'morpheus', 'leader')}>Update user</button>
            <button onClick={() => deleteUser(1)}>Delete user</button>
        </div>

    </div>
  )
}
