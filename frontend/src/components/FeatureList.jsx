import { useContext, useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'
import axios from 'axios'
import SelectedObjectContext from "../SelectedObjectContext"
import CollectionContext from "../CollectionContext"

export const FeatureList = () => {

    const { setCollection } = useContext(CollectionContext)
    const { selectedObject, setSelectedObject } = useContext(SelectedObjectContext)
    const [ features, setFeatures ] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const getFeatures = async () => {
            const response = await axios.get(`http://localhost:3001/features?climbID=${selectedObject._id}`)
            const data = response.data
            console.log(data)
            setFeatures(data)
        }
        getFeatures()
    },[selectedObject])

    const handleClick = (feature) => {
        navigate('/features')
        setSelectedObject(feature)
    }

    if (!features) return <>loading</>

    if (!features.length > 0 ) {
        return (<div className="assoc-feat">currently no associated featuers</div>)
    }

    return  (
        <div className={"assoc-feat-list"}>
            { features.map((feature, idx)=> (
                <div key={idx} className="assoc-feat" onClick={()=>handleClick(feature)}>{feature.name}</div>
            ))}
        </div>

    )
      
}