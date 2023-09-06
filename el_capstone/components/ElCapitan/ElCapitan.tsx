"use client"

import {useState} from "react"
import { HUD } from "./HUD"
import { Canvas } from "@react-three/fiber"
import { ElCapScene } from './ElCapScene'

import LoggedInContext from '@/contexts/LoggedInContext'
import SelectedObjectContext from '@/contexts/SelectedObjectContext'
import AxiosActionContext from '@/contexts/AxiosActionContext'
import CameraPositionContext from '@/contexts/CameraPositionContext'
import CollectionContext from '@/contexts/CollectionContext'
import TimeContext from '@/contexts/TimeContext'

export const ElCapitan = ({data}:any) => {

    const defaultCamera = {
        position: [0,0,7],
        target: [0,0,0],
    }

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(data)
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

    const [ loggedInUser, setLoggedInUser ] = useState(null)
    const [ selectedObject, setSelectedObject ] = useState(null)
    const [ axiosAction, setAxiosAction ] = useState(false)
    const [ cameraPosition, setCameraPosition ] = useState(defaultCamera)
    const [ collection, setCollection ]= useState(data)
    const [ time, setTime ] = useState('day')

    return (
        <>
            <LoggedInContext.Provider value={{loggedInUser, setLoggedInUser}}>
                <SelectedObjectContext.Provider value={{selectedObject, setSelectedObject}}>
                    <AxiosActionContext.Provider value={{axiosAction, setAxiosAction}}>
                        <CameraPositionContext.Provider value={{cameraPosition, setCameraPosition}}>
                            <CollectionContext.Provider value={{collection, setCollection}}>
                                <TimeContext.Provider value={{time, setTime}}>
                                    <HUD />
                                    <Canvas camera={{ position: [0,0,7], fov: 40}} >
                                        <ElCapScene />
                                    </Canvas> 
                                </TimeContext.Provider>
                            </CollectionContext.Provider>
                        </CameraPositionContext.Provider>
                    </AxiosActionContext.Provider>
                </SelectedObjectContext.Provider>
            </LoggedInContext.Provider>
        </>
    )

}