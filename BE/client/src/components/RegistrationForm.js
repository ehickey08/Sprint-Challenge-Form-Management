import React from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function RegistrationForm({errors, touched, status}) {
    return (
        <Form>
            {status && <h2>{status.username}</h2>}
            <label>Username</label>
            <Field type="text" name="username"/>
            {errors.username && touched.username && <p>{errors.username}</p>}
            <label>Password</label>
            <Field type="password" name="password"/>
            {errors.password && touched.password && <p>{errors.password}</p>}
            <label>Confirm Password</label>
            <Field type="password" name="confirm"/>
            {errors.confirm && touched.confirm && <p>{errors.confirm}</p>}
            <button type="submit">Register</button>
        </Form>
    )
}

export const FormikRegistrationForm = withFormik({
    mapPropsToValues(){
        return {
            username: '',
            password: '',
            confirm: '',
        }
    },
    handleSubmit(values, {props, resetForm, setStatus, setSubmitting, setValues}){
        if(values.username==='ehickey08')
            setStatus({username: "That username is already taken"})
        else{
            axios
                .post('http://localhost:5000/api/register', values)
                .then(res => {
                    props.getToken(res.data.token)
                    window.alert(res.data.message)
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
            .matches(/(?=.*[0-9])(?=.[!@#\$%\^&])/, 'Your password must have at least one number and at least one special character!'),
        confirm: Yup. string()
            .oneOf([Yup.ref('password'), null], "Passwords don't match!")
            .required('Password is required'),
    })
})(RegistrationForm)