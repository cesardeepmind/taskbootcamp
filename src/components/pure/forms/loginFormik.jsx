import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email').required('Email Required'),
        password: Yup.string().required('Password Required'),
    }
)

export default function Loginformik() {

    const history = useHistory();

    const initialCredentials = {
        email: '',
        password: ''
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
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                //we save the data in the localstorage
                await localStorage.setItem('credentials', JSON.stringify(values))
                //we navigate to the profile page
                history.push('/profile')
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
    </div>
  )
}
