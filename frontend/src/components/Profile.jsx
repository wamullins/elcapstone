import { useState, useContext, useEffect } from "react"
import axios from 'axios'
import LoggedInContext from "../LoggedInContext"
import AxiosActionContext from '../AxiosActionContext'
import { ProfileHeader } from "./ProfileHeader"
import { ProfileSendLog } from "./ProfileSendLog"
import { API } from "../../lib"


export const Profile = () => {
    const { loggedInUser } = useContext(LoggedInContext)
    const { axiosAction, setAxiosAction } = useContext(AxiosActionContext)
    const [ sendLogs, setSendLogs ] = useState([])

    useEffect(() => {
        const getSendLogs = async () => {
            const response = await axios.get(`${API}/sendLogs?userID=${loggedInUser._id}`)
            const data = response.data
            setSendLogs(data)
        }
        if (!loggedInUser) {return}
        getSendLogs()
        
    }, [axiosAction])

    // after the axios action is done, it will trigger re renderes which will then trigger this to set it back to false
    useEffect(() => {
        setAxiosAction(false)
    }, [sendLogs, loggedInUser])

    if (!loggedInUser) {
        return (
            <div className="profile-wrapper">
                <div className="profile-route-body">No user logged In</div>
            </div>
        )
    }

    return (
        <>
            <div className="profile-wrapper"></div>
            <div className="profile-route-body">
                <ProfileHeader />
                <div style={{ fontSize: "30px", width: "80%", borderBottom: "1px solid black", textAlign: "center", paddingBottom: "8px"}}>Send Logs</div>
                <div className="profile-send-log-grid">
                    { sendLogs.map((log, idx) => (
                        <ProfileSendLog key={idx} log={log}/>
                    ))}
                </div>
            </div>
        </>
       
    )
    
}