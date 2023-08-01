import { useContext, useEffect, useState } from "react"
import LoggedInContext from "../LoggedInContext"

export const SignOut = () => {

    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)
    const [ username, setUsername ] = useState(null)

    useEffect(() => {
        if (loggedInUser) {
            setUsername(loggedInUser.name)
        }
    }, [loggedInUser])

    useEffect(() => {
        if (username) {
            setLoggedInUser(null)
            console.log('signing out')
        }
    },[username])
   

    return (
        <>  
            <div className="sign-out-wrapper"></div>
            <div className="sign-out-route">Logging Out {username}</div>
        </>
       
        
    )
}