import { useState, useContext, useEffect } from "react"
import axios from 'axios'
import LoggedInContext from "../LoggedInContext"

export const ProfileHeader = () => {

    const { loggedInUser , setLoggedInUser} = useContext(LoggedInContext)

    const initialState= {
        name: loggedInUser.name,
        email: loggedInUser.email,
        gradePB: loggedInUser.gradePB,
    }

    const [editMode, setEditMode] = useState(false)
    const [updateState, setUpdateState] = useState(loggedInUser)


    const handleChange = (e) => {
        setUpdateState({...updateState, [e.target.id]: e.target.value})
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3001/users/${loggedInUser._id}`, updateState)
            setEditMode(false)
            setLoggedInUser({...loggedInUser, ...updateState})
        } catch (error) {
            console.log(error);
        }
    }

    const handleClose = () => {
        setEditMode(false)
        setUpdateState(initialState)
    }


    return (
        <>
            { editMode ? 
                <>
                    <div className="profile-header">
                        <div style={{display: "flex", flexDirection: "column"}}>   
                            <input id="name" type="text" onChange={handleChange} style={{fontSize: "40px", margin: '2%'}} value={updateState.name}/>
                            <input id="email" type="email" onChange={handleChange} style={{margin: '2%'}} value={updateState.email}/>
                        </div>
                        <div style={{display: "flex"}}>
                            <button onClick={handleUpdate} style={{textDecoration: "none", fontFamily: "Montserrat, sansSerif", background: "transparent", fontSize: "25px", alignSelf: "flex-start" ,margin: '0.5%'}}>Update</button> 
                            <button onClick={handleClose} style={{textDecoration: "none", fontFamily: "Montserrat, sansSerif", background: "transparent", border: "none", fontSize: "25px", alignSelf: "flex-start" ,margin: '0.5%'}}>(close)</button>
                        </div>
                    </div>
            
                    <input type="text" id="gradePB" className="personal-best" onChange={handleChange} value={updateState.gradePB}/>
                </> 
                : <>
                    <div className="profile-header">
                        <div style={{display: "flex", flexDirection: "column"}}>   
                            <div style={{fontSize: "40px", margin: '2%'}}>{loggedInUser.name}</div>
                            <div style={{margin: '2%'}}>{loggedInUser.email}</div>
                        </div>
                        <button onClick={() => setEditMode(true)} style={{textDecoration: "none", fontFamily: "Montserrat, sansSerif", background: "transparent", border: "none", fontSize: "25px", alignSelf: "flex-start" ,margin: '0.5%'}}>(edit)</button>
                    </div>
            
                    <div className="personal-best">Personal Best: {loggedInUser.gradePB}</div>
                </>
            }
        </>
        
    )
}