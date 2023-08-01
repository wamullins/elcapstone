import AxiosActionContext from "../AxiosActionContext"
import { useContext, useState, useEffect } from "react"
import axios from 'axios'


export const ProfileSendLog = ({ log }) => {

    const initialState= {
        grade: log.grade,
        description: log.description,
    }

    const { setAxiosAction } = useContext(AxiosActionContext)
    const [editMode, setEditMode] = useState(false)
    const [updateState, setUpdateState] = useState(initialState)

    const [ route, setRoute ] = useState()

    useEffect(() => {
        const getRoute = async () => {
            const response = await axios.get(`http://localhost:3001/climbs/${log.routeID}`)
            const data = response.data
            setRoute(data)
        }
        getRoute()
    }, [])

    const handleChange = (e) => {
        setUpdateState({...updateState, [e.target.id]: e.target.value})
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3001/sendlogs/${log._id}`, updateState)
            setEditMode(false)
            setAxiosAction(true)
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/sendlogs/${log._id}`)
            setAxiosAction(true)
            setEditMode(false)
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
            {editMode ? 
                <div className="profile-send-log-div">
                    <div style={{display: "flex", flexDirection: "column", width:"80%", alignItems: "flex-start"}}>
                        {route ? <div style={{width: "60%", margin:"5px", fontSize:"24px", borderBottom: "1px solid black", }}>{route.name}</div> : <div>loading</div>}
                        <label htmlFor='grade'>Grade:</label>
                        <input id='grade' type='text' onChange={handleChange} value={updateState.grade} style={{width: "100%"}}/>

                        <label htmlFor='description'>Description:</label>
                        <textarea id='description' onChange={handleChange} value={updateState.description} style={{width: "100%"}}/>
                
                        <button onClick={handleUpdate} style={{textDecoration: "none", fontFamily: "Montserrat, sansSerif", background: "transparent", border: "none", fontSize: "20px" ,margin: '0.5%'}}>Update</button>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent:"space-between", width: "20%"}}>
                        <button onClick={handleClose} style={{textDecoration: "none", fontFamily: "Montserrat, sansSerif", background: "transparent", border: "none", fontSize: "20px", margin: '0.5%'}}>close</button>
                        <button onClick={handleDelete} style={{textDecoration: "none", fontFamily: "Montserrat, sansSerif", background: "transparent", border: "none", fontSize: "20px" ,margin: '0.5%'}}>delete</button>
                    </div>
                </div> 
                : 
                <div className="profile-send-log-div">
                    <div style={{display: "flex", flexDirection: "column", width:"80%"}}>
                        {route ? <div style={{width: "60%", margin:"5px", fontSize:"24px", borderBottom: "1px solid black", }}>{route.name}</div> : <div>loading</div>}
                        <div style={{margin:"10px"}}>Proposed Grade: {log.grade}</div>
                        <div style={{margin:"10px"}}>"{log.description}"</div>
                    </div>
                    <button onClick={()=> setEditMode(true)} style={{textDecoration: "none", width: "20%", fontFamily: "Montserrat, sansSerif", background: "transparent", border: "none", fontSize: "20px", alignSelf: "flex-start" ,margin: '0.5%'}}> (edit) </button>
                </div>
            }
        </>
    )
}