import React from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function RegistrationForm({errors, touched}) {
    return (
        <Form>
            <label>Username</label>
            <Field type="text" name="username"/>
            {errors.username && touched.username && <p>{errors.username}</p>}
            <label>Password</label>
            <Field type="password" name="password"/>
            {errors.password && touched.password && <p>{errors.password}</p>}
            <button>Register</button>
        </Form>
    )
}

export const FormikRegistrationForm = withFormik({
    mapPropsToValues(){
        return {
            username: '',
            password: ''
        }
    },
    handleSubmit(values, {resetForm, setErrors, setSubmitting}){
        if(values.username==='ehickey08')
            setErrors({email: "That username is already taken"})
        else{
            axios
                .post('http://localhost:5000/api/register', values)
                .then(res => {
                    res.data.message
                    getToken(res.data.token)
                    resetForm()
                    setSubmitting(false)
                })
                .catch(err => {
                    console.log(err.response)
                    setSubmitting(false)
                })
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username is required!'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required')
    })
})(RegistrationForm)