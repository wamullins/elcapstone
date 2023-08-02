import { useLocation } from "react-router-dom"
import { useEffect, useContext } from 'react'
import axios from 'axios'
import SelectedObjectContext from "../SelectedObjectContext"
import CollectionContext from "../CollectionContext"
import { SendLogList } from "./SendLogList"
import { FeatureList } from "./FeatureList"
import { Clock } from './Clock'

export const HUD = () => {
    let location = useLocation().pathname;

    const { collection, setCollection } = useContext(CollectionContext)
    const { selectedObject, setSelectedObject } = useContext(SelectedObjectContext)

    useEffect(() => {
        setCollection(null)

        if (location ==="/") {
            return
        }

        const getCollection = async () => {
            const response = await axios.get(`http://localhost:3001${location}`)
            const data = response.data
            console.log(data)
            setCollection(data)
        }

        getCollection()
    }, [location])

    if (location=== "/") {
        return (
            <>
                <div className="home-title">El Capitan</div>
            </>
            
        )
    }

    if (!selectedObject) {
        return (
            <div className="object-menu">
            <div className="object-menu-title">{location==="/features" ? "features" : "routes"}</div>
            <div className="object-list">
                { collection ? 
                    <>
                        {collection.map((object, idx) => (
                            <div onClick={() => setSelectedObject(object)} key={idx} className="object-list-item">{object.name}</div>
                        ))}
                    </>
                    : <> Loading objects </>
                }
            </div>
            {/* <Clock/> */}
        </div>
        )
    }

    return (
        <>
            <div className="object-picture-list">
                {selectedObject.images.map((image, idx) => (
                    <img src={image} key={idx}/>
                ))}
            </div>
            <div className="object-div">
                <div className="object-title">{selectedObject.name}</div>
                { location === "/climbs" ? 
                    <>
                        <div className="route-info-div">
                            <div style={{width: "50%", padding:"1%", borderTop: "1px solid black"}}>Grade: {selectedObject.grade} </div>
                            <div style={{width: "50%", padding:"1%"}}>Pitches: {selectedObject.pitches} </div>
                            <div style={{width: "50%", padding:"1%", borderBottom:"1px solid black"}}>Length: {selectedObject.length}m </div>
                            <div style={{padding: "1%"}}>{selectedObject.description}</div>
                        </div>
                        <div className="route-sec-title">features on the route:</div>
                        <FeatureList/>
                        <div className="route-sec-title">send logs:</div>
                        <SendLogList/>
                    </>
                    
                    :
                    <div className="feature-info-div">{selectedObject.description}</div>
                }
            </div>
            {/* <Clock/> */}

        </>
    )
    
}