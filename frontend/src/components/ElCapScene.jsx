import { Suspense, useRef, useContext, useEffect } from 'react'
import { CameraControls, Box } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import CameraPositionContext from '../CameraPositionContext'
import SelectedObjectContext from '../SelectedObjectContext'
import { ObjectHighlight } from './ObjectHighlight'


export const ElCapScene = () => {

    const gltf = useLoader(GLTFLoader, '/el_capitan/scene.gltf')
    const { cameraPosition, setCameraPosition } = useContext(CameraPositionContext)
    const { selectedObject } = useContext(SelectedObjectContext)
    const cameraControlsRef = useRef()
    
    // whenever the cameraPositionContext is changed, this will adjust the camera accordingly
    useEffect(() => {
        cameraControlsRef.current?.setPosition(cameraPosition.position[0], cameraPosition.position[1], cameraPosition.position[2], true)
        cameraControlsRef.current?.setTarget(cameraPosition.target[0], cameraPosition.target[1], cameraPosition.target[2], true)
        
    }, [cameraPosition])


    useEffect(() => {
        if (selectedObject) {
            console.log(`settng camera`)
            console.log(selectedObject.camera)
            setCameraPosition(selectedObject.camera)
        }
    },[selectedObject])


    return (
        <>
            <primitive object={gltf.scene} rotation={[ 0, -Math.PI/3, 0]} scale={7}/>
            <ObjectHighlight />
            <CameraControls
                ref={cameraControlsRef}
                enabled= {true}
                verticalDragToForward={false}
                enableTransition
                maxDistance={8}
                minDistance={1}
                maxPolarAngle={3*Math.PI/4}
                // colliderMeshes={[primitive]}
            />
            <hemisphereLight intensity={1}/>
            {/* <spotLight position={[0,7,0]} intensity={1} /> */}
        </>
    )
}