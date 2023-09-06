import { useContext } from 'react'
import LoggedInContext from '@/contexts/LoggedInContext'
import SelectedObjectContext from '@/contexts/SelectedObjectContext'
import CameraPositionContext from '@/contexts/CameraPositionContext'

export const Nav = () => {

    const { loggedInUser } = useContext(LoggedInContext)
    const { setSelectedObject }= useContext(SelectedObjectContext)
    const { setCameraPosition } = useContext(CameraPositionContext)
 
    const defaultCamera = {
        position: [0,0,7],
        target: [0,0,0],
    }

    const handleClick = () => {
        setSelectedObject(null)
        setCameraPosition(defaultCamera)
    }

    return (
        <div className="nav-links">
            <NavLink to="/" onClick={handleClick}>Home</NavLink>
            <NavLink to="/climbs" onClick={handleClick}>Routes</NavLink>
            <NavLink to="/features" onClick={handleClick}>Features</NavLink>
            { loggedInUser ? 
                <>
                    <NavLink to="/profile" onClick={handleClick}>{loggedInUser.name}</NavLink>
                    <NavLink to="/signout" className="toggle-login" onClick={handleClick}>Sign Out</NavLink>
                </> :
                <NavLink to="/signin" className="toggle-login" onClick={handleClick}>Sign In</NavLink>
            }


            {/* this will be used with the oauth things */}
            {/* { loggedInUser ? <NavLink to="/logout">Log Out</NavLink>:
            <NavLink to="/auth/google" className="login">LogIn&nbsp;</NavLink>} */}
        </div>
    )
}

// bunch of components that look at the url {param} and if it's "climb" the climb component will show waht it needs (same for features and home)
// 