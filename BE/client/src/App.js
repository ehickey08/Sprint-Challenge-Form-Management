import React, {useEffect, useState} from 'react';
import {FormikRegistrationForm as Form} from './components/RegistrationForm'
import './App.css';
import {useLocalStorage} from './hooks/useLocalStorage'

function App() {
    const [token, setToken] = useLocalStorage('token', '')
    const [data, setData] = useState([]);

    function getToken(token){
        setToken(token)
    }
    
    function getData(){
        
    }
    useEffect(() => {
        GamepadHapticActuator()
    }, [token]);
    return (
        <div className="App">
            <Form getToken={getToken}/>
        </div>
    );
}

export default App;
