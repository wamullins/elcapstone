import axios from 'axios'
import { useState, useEffect } from 'react'
import { API } from "@/lib"

export const SendLog = ({ log }) => {

    const [ user, setUser ] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get(`${API}/users/${log.userID}`)
            const data = response.data
            console.log(data)
            setUser(data)
        }
        getUser()
    }, [])

    return ( 
        <div className="send-log-div">
            {user ? <div style={{width:"40%", marginLeft:"5px", fontSize:"20px", borderBottom: "1px solid black"}}>{user.name}</div> : <div>loading</div>}
            <div style={{margin:"5px", fontSize:"15px"}}>Proposed Grade: {log.grade}</div>
            <div style={{marginLeft: "20px", margin:"5px", fontSize:"15px"}}>"{log.description}"</div>
        </div>     
    )
}