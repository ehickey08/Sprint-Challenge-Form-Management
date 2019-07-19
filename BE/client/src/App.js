import React, {useEffect, useState} from 'react';
import {FormikRegistrationForm as Form} from './components/RegistrationForm'
import './App.css';
import {useLocalStorage} from './hooks/useLocalStorage'
import {axiosWithAuth} from './util/axiosWithAuth'
import Recipe from './components/Recipe'

function App() {
    const [token, setToken] = useLocalStorage('token', '')
    const [data, setData] = useState([]);

    function getToken(token){
        setToken(token)
    }
    
    function getData(){
        axiosWithAuth()
            .get(`http://localhost:5000/api/restricted/data`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        if(token){
            getData()
        }
    }, [token]);
    
    return (
        <div className="App">
            <Form getToken={getToken}/>
            {data && data.map(recipe => <Recipe recipe={recipe} key={recipe.name}/>)}
        </div>
    );
}

export default App;
