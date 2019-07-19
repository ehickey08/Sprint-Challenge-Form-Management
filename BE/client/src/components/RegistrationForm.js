import React from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import styled from 'styled-components'

function RegistrationForm({errors, touched, status, isSubmitting}) {
    return (
        <StyledFrom>
            {status && <h2>{status.username}</h2>}
            <div>
                <label>Username</label>
                <Field type="text" name="username" className={errors.username ? 'invalid' : ''}/>
                {errors.username && touched.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label>Password</label>
                <Field type="password" name="password" className={errors.password ? 'invalid' : ''}/>
                {errors.password && touched.password && <p>{errors.password}</p>}
            </div>
            <div>
                <label>Confirm Password</label>
                <Field type="password" name="confirm" className={errors.confirm ? 'invalid' : ''}/>
                {errors.confirm && touched.confirm && <p>{errors.confirm}</p>}
            </div>
            <button type="submit" disabled={isSubmitting}>Register</button>
        </StyledFrom>
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
    handleSubmit(values, {props, resetForm, setStatus, setSubmitting}){
        if(values.username==='ehickey08'){
            setStatus({username: "That username is already taken"})
            setSubmitting(false)
        }
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
            .matches(/(?=.*[0-9])(?=.*[!@#$%^&])/, 'Your password must have at least one number and at least one special character!'),
        confirm: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords don't match!")
            .required('Password is required'),
    })
})(RegistrationForm)

const StyledFrom = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 50px auto;

    div{
        display: flex;
        flex-direction: column;
        width: 60%;
        margin: 0 auto;
        text-align: left;

        label{
            color: darkgray;
            font-size: 13px;
            margin: 10px 0;
        }

        input{
            border: 2px solid transparent;
            border-radius: 5px;
            padding: 10px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            transition: all 0.3s;
            font-size: 14px;
            letter-spacing: 0.5px;

            &:focus{
                outline: none;
                border-color: #80cbc4;
            }

            .invalid{
                border-color: #e57373
            }
        }

        p{
            font-size: 12px;
            color: #e57373;
            margin-top: 5px;
        }
    }
    button {
        display: inline-block;
        width: 50%;
        margin: 20px auto;
        padding: 10px 14px;
        font-size: 14px;
        text-transform: uppercase;
        font-family: inherit;
        border: 0;
        border-radius: 5px;
        letter-spacing: 2px;
        background-color: #4dd0e1;
        background-image: linear-gradient(
        to right,
        #4db6ac,
        #4dd0e1
        );
        color: #fff;
        cursor: pointer;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

        &:hover{
            background-image: none;
            background-color: #4db6ac;
        }
        &:focus, &:active{
            outline-offset: 5px;
        }
        &:disabled{
            background: gray;
            cursor: none;
        }
    }
`