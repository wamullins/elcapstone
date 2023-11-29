import { useState, useEffect } from 'react'
import axios from 'axios'
import { API } from "../../lib"

export const SignUp = () => {

    const default_input = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const [signUpFormState, setSignUpFormState] = useState(default_input);
    const [successState, setSuccessState] = useState(false);
    const [userEmails, setUserEmails] = useState([]);

    // get all existing user emails. This will be used in teh handle sign up function
    useEffect(() => {
        const getEmails = async () => {
            const response = await axios.get(`${API}/users/emails`)
            const data = response.data
            setUserEmails(data)
        }
        getEmails()
    },[])

    const handleChange = (e) => {
        setSignUpFormState({...signUpFormState, [e.target.id]: e.target.value})
    }

    const handleSignUp = async (e) => {
        e.preventDefault()

        // check existing emails and if there is already an account using the email, return here - 
        const existingEmail = userEmails.filter(em => em.email === signUpFormState.email)
        if (existingEmail.length > 0) {
            alert("email already in use")
            return
        }

        // confirm all fields are filled out
        if (!signUpFormState.name || !signUpFormState.email || !signUpFormState.password || !signUpFormState.confirmPassword) {
            alert('all fields must be filled in')
            return
        }

        // confirm that both passwords match
        if (signUpFormState.password !== signUpFormState.confirmPassword) {
            alert("passwords must match")
            return
        }
        
        await axios.post(`${API}/users/`, {
                name: signUpFormState.name,
                email: signUpFormState.email,
                gradePB: '',
                password: signUpFormState.password,
            })
            setSuccessState(true)
            console.log("signed up")
    }

    if (!successState) {
        return (
            <>
                <div className="sign-in-wrapper"></div>
                <form className='sign-up-route-body' onSubmit={handleSignUp}>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type='text' onChange={handleChange} value={signUpFormState.name}/>

                    <label htmlFor='email'>Email:</label>
                    <input id='email' type='email' onChange={handleChange} value={signUpFormState.email}/>
                
                    <label htmlFor='password'>Password:</label>
                    <input id='password' type='password' onChange={handleChange} value={signUpFormState.password}/>

                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                    <input id='confirmPassword' type='password' onChange={handleChange} value={signUpFormState.confirmPassword}/>
                    
                    <button type="submit">Sign Up</button>
                </form>
            </>
        )
    }

    return (
        <div className="sign-in-wrapper">
            <div className='sign-up-route-body'>
                <div>Successfully Signed Up!</div>
                <div style={{textAlign: "center", scale: "0.8"}}>You may now sign in with your email and password!</div>
            </div>
        </div>
    )

}