import React, {useEffect, useState} from 'react';
import {FormikRegistrationForm as Form} from './components/RegistrationForm'
import './App.css';
import {useLocalStorage} from './hooks/useLocalStorage'
import {axiosWithAuth} from './util/axiosWithAuth'
import Carousel from './components/Carousel'

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
            {data.length>0 && <Carousel data={data} />}
        </div>
    );
}

export default App;
