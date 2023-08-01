import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import SelectedObjectContext from "../SelectedObjectContext"
import AxiosActionContext from '../AxiosActionContext'
import LoggedInContext from '../LoggedInContext'
import { SendLog } from "./SendLog"
import { SendLogSubmit } from './SendLogSubmit'


export const SendLogList = () => {

    const { selectedObject } = useContext(SelectedObjectContext)
    const { axiosAction, setAxiosAction } = useContext(AxiosActionContext)
    const { loggedInUser } = useContext(LoggedInContext)
    const [ sendLogs, setSendLogs ] = useState(null)
    
    useEffect(() => {
        const getSendLogs = async () => {
            const response = await axios.get(`http://localhost:3001/sendLogs?routeID=${selectedObject._id}`)
            const data = response.data
            console.log(data)
            setSendLogs(data)
        }
        getSendLogs()
        
    }, [axiosAction])
    
    useEffect(() => {
        setAxiosAction(false)
    }, [sendLogs])

    if (!sendLogs) {return <>Loading Logs</>}

    return (
        <div className="route-send-logs">
            {loggedInUser ? <SendLogSubmit/> : <></>}

            { sendLogs.length > 0 ? 
                <>
                    {sendLogs.map((log, idx) => (
                        <SendLog log={log} key={idx}/>   
                    ))} 
                </>
            :
                <div style={{textAlign: "center", color: "white", margin: "3%"}}>No Sends Currently Logged</div>
            }       
        </div>
    )
}