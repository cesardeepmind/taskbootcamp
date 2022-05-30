import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


//models
// import { User } from '../../../models/user.class'
import { ROLES } from '../../../models/roles.enum';


export default function RegisterFormik() {

    // let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        rol: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string().min(5,'Username too short').max(12, 'Username too long').required('Username Required'),
            email: Yup.string().email('Invalid email').required('Email Required'),
            password: Yup.string().min(8, 'Password too short').required('Password Required'),
            confirmPassword: Yup.string().when('password', {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
            }).required('Confirm Password Required'),
            rol: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User/Admin').required('Role Required'),
        }
    )

    // const submit = (values) => {
    //     alert('register user',values);
    // }

  return (
    <div>
        <h4>Register Formik</h4>
        <Formik
            // initial values tha the form will take
            initialValues={ initialValues }
            // Yup validation schema
            validationSchema={ registerSchema }
            // onSubmit event
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
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
                    <label htmlFor="username">Username</label>
                    <Field
                        id="username"
                        name="username"
                        placeholder="Your username"
                        type="text"
                    />
                    {/* username errors */}
                    {errors.username && touched.username &&
                        (
                            <ErrorMessage name="username" component='div' />
                        )
                    }

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="Your email"
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
                        placeholder="Your password"
                        type="password"
                    />
                    {/* password errors */}
                    {errors.password && touched.password &&
                        (
                            <ErrorMessage name="password" component='div' />
                        )
                    }

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        type="password"
                    />
                    {/* confirmPassword errors */}
                    {errors.confirmPassword && touched.confirmPassword &&
                        (
                            <ErrorMessage name="confirmPassword" component='div' />
                        )
                    }

                    <button type="submit">Register Account</button>
                    {isSubmitting ? (<p>Sending your credentials...</p>) : null}

                </Form>
                )
            }

        </Formik>
    </div>
  )
}
