import axios from 'axios'
import { useState, useContext } from 'react'
import SelectedObjectContext from '../SelectedObjectContext'
import AxiosActionContext from '../AxiosActionContext'
import LoggedInContext from '../LoggedInContext'
import { API } from "../../lib"

export const SendLogSubmit = () => {

    const { selectedObject } = useContext(SelectedObjectContext)
    const { setAxiosAction } = useContext(AxiosActionContext)
    const { loggedInUser } = useContext(LoggedInContext)

    const initialState = {
        routeID: selectedObject._id,
        userID: loggedInUser._id,
        grade: '',
        description: '',
    }
    const [ editMode, setEditMode ] = useState(false)
    const [ submitFormState, setSubmitFormState ] = useState(initialState)

    const handleChange = (e) => {
        setSubmitFormState({...submitFormState, [e.target.id]: e.target.value})
    }

    const handleClose = () => {
        setEditMode(false)
        setSubmitFormState(initialState)
    }

    const handleSubmit = async () => {
        try {
            await axios.post(`${API}/sendlogs/`, submitFormState)
            setEditMode(false)
            setAxiosAction(true)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            { editMode ? 
                <div className="submit-div">
                    <button onClick={handleClose} style={{alignSelf: "flex-end"}}>close</button>

                    <label htmlFor='grade' style={{color:"white"}}>Grade:</label>
                    <input id='grade' type='text' onChange={handleChange} value={submitFormState.grade} style={{width: "80%"}}/>

                    <label htmlFor='description' style={{color:"white"}}>Description:</label>
                    <textarea id='description' onChange={handleChange} value={submitFormState.description} style={{width: "80%"}}/>
                    <button onClick={handleSubmit} style={{width: "40%", margin: "1%"}}>Send!</button>
                </div>
                :
                <button onClick={()=> setEditMode(true)} style={{alignSelf: "flex-end"}}>Log Send</button>
            }
            
        </>
    )
}