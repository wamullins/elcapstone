import { useContext } from 'react'
import TimeContext from '../TimeContext'
// import CameraPositionContext from "../CameraPositionContext"

export const Clock = () => { 

    const { time, setTime } = useContext(TimeContext)

    const handleClick = () => {
        if ( time === 'day' ) {
            setTime('night')
        } else {
            setTime('day')
        }
    }

    const btnStyle = {
        backgroundColor: time === 'day' ? '#242424': '#fbaa48',
        color:  time === 'day' ? 'white' : '#242424',
        borderRadius: '8px',
        fontSize: '2.2vmin',
        padding: '12px',
        fontFamily: 'Montserrat'
    }

    ///// CODE USED FOR ADDING IN NEW ROUTES AND TESTING CAMERA ANGLES. 

    // const  moveHereLookThere = {
    //     position: [3.7, 0.4, 3],
    //     target: [2.8, 0.4, 1.2],
    // }

    // const { setCameraPosition } = useContext(CameraPositionContext)

    return (
        <div className="clock-div">
            <button style={btnStyle} onClick={handleClick}>{time=== 'day' ? 'night' : 'day' }</button>
        </div>
        
    )
    // this will eventualy ben user to control the spot light overhead to change teh time of day. for now it is being used for camera angle testing
}