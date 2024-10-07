import React, { useState } from 'react';

const Login = () => {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log(userDetails);
    };

    return (
        <main className="login">
            <h2>Login</h2>
            <div className="login__container"></div>
            <div className="login__container container">
                <form className='login__form' onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        className="input" 
                        placeholder='Email' 
                        value={userDetails.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        className="input" 
                        placeholder='Password' 
                        value={userDetails.password} 
                        onChange={handleChange} 
                        required 
                    />
                    <button type="submit">Login</button>
                </form>
                <div className="login__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea dolorem asperiores ad assumenda aliquam?</p>
                </div>
            </div>
        </main>
    );
}

export default Login;
