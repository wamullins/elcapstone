import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import LoggedInContext from '../LoggedInContext'
import { API } from "@/lib"


export const SignIn = () => {

    const default_input = {
        email: '',
        password: '',
    }


    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)
    const [loginState, setLoginState] = useState(default_input)
    const navigate = useNavigate();

    // useEffect(() => {
    //     const getLoggedInUser = async () => {
    //         const response = await axios.get('${API}/users/64c1a7596257b2f5fe9a6392')
    //         const data = response.data
    //         console.log(data.name)
    //         setLoggedInUser(data)
    //     }
    //     getLoggedInUser()
    // },[])

    const handleChange = (e) => {
        setLoginState({...loginState, [e.target.id]: e.target.value})
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        const findUser = async () => {
            // check email assocaited account exists in database
            const response = await axios.get(`${API}/users?email=${loginState.email}`)
            if (!response.data[0]) {
                alert("email not found")
                return
            }
            console.log("email found")

            // check the passwords against each other
            if (response.data[0].password !== loginState.password) {
                alert("incorrect password")
                return
            }

            console.log(`logging in ${response.data[0].name}`)
            setLoggedInUser(response.data[0])
            setLoginState(default_input)
            navigate('/profile')
        }
        findUser()
    }

    if (!loggedInUser) {
        return (
            <>
                <div className="sign-in-wrapper"></div>
                <div className="sign-in-route-body">
                    <form className='sign-in-form' onSubmit={handleLogin}>
                        <label htmlFor='email'>Email:</label>
                        <input id='email' type='email' onChange={handleChange} value={loginState.email}/>
                    
                        <label htmlFor='password'>Password:</label>
                        <input id='password' type='password' onChange={handleChange} value={loginState.password}/>
                        
                        <button type="submit">Login</button>
                    </form>
                    <div className="sign-up-link">
                        <div>Don't have an account yet?</div>
                        <button  onClick={() => navigate('/signup')}>Sign Up</button>
                    </div> 
                </div>
            </>
        )
    }

    return (
        <>
            <div className="sign-in-wrapper"></div>
            <>Logged in as {loggedInUser.name}</>
        </>
        
       
    )

}