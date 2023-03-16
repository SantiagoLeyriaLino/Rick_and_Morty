import { useState } from "react";
import validation from "./validation";


export default function Form({login}) {

    const [userData, setUserData] = useState({ 
        username: "", 
        password: "" 
    });

    const [errors, setErrors] = useState({ 
        username: "", 
        password: "" 
    });

    const handleInputChange= (event)=>{
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData,[property]:value});
        setErrors(
            validation({
                ...userData,
                [property]:value
            })
        )
    }

    const handleSubmit= (event)=>{
        event.preventDefault();
        login(userData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                    <input 
                    type="text" 
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                    />
                    {errors.username && <span>{errors.username}</span>}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                    <input 
                    type="text" 
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
} 

