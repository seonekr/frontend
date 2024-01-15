import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SellerRegister from './components/sellerRegister/SellerRegister';
import RegisterUser from './components/loginAndSignup/RegisterUser'
import LoginUser from './components/loginAndSignup/LoginUser';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={SellerRegister}/>
                <Route path='/login-user' Component={LoginUser}/>
                <Route path='/register-user' Component={RegisterUser}/>
            </Routes>
        </Router>
    );
}

export default App;