
import { Suspense, useRef, useContext, useEffect, useState } from 'react'
import * as THREE from 'three';
import { CameraControls, Sky, Stars } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import CameraPositionContext from '@/contexts/CameraPositionContext'
// import SelectedObjectContext from '@/contexts/SelectedObjectContext'
import TimeContext from '@/contexts/TimeContext'
// import { ObjectHighlight } from './ObjectHighlight'
import pic from '@/public/yosemite_top_map.png'

export const ElCapScene = () => {

    // const defaultCamera = {
    //     position: [0,0,7],
    //     target: [0,0,0],
    // }
   

    const gltf = useLoader(GLTFLoader, '/el_capitan/scene.gltf')

    // const floorMap = useLoader(THREE.TextureLoader, pic)

    // const { cameraPosition, setCameraPosition } = useContext(CameraPositionContext)
    // const { selectedObject } = useContext(SelectedObjectContext)
    const { time } = useContext(TimeContext)
    const cameraControlsRef = useRef()
    const elCap = useRef()


    // const [ loggedInUser, setLoggedInUser ] = useState(null)
    // const [ selectedObject, setSelectedObject ] = useState(null)
    // const [ axiosAction, setAxiosAction ] = useState(false)
    // const [ cameraPosition, setCameraPosition ] = useState(defaultCamera)
    // const [ collection, setCollection ]= useState(null)
    // const [ time, setTime ] = useState('day')

    
    // useEffect(()=> {
    //     const cameraBoundary = new THREE.Box3(
    //         new THREE.Vector3( -7.0,-1.5, -1.5 ),
    //         new THREE.Vector3( 7.0, 10.0, 10.0 )
    //     );
    //     cameraControlsRef.current?.setBoundary(cameraBoundary)
    // },[])
    
    // whenever the cameraPositionContext is changed, this will adjust the camera accordingly
    // useEffect(() => {
    //     cameraControlsRef.current?.setPosition(cameraPosition.position[0], cameraPosition.position[1], cameraPosition.position[2], true)
    //     cameraControlsRef.current?.setTarget(cameraPosition.target[0], cameraPosition.target[1], cameraPosition.target[2], true)
        
    // }, [cameraPosition])


    // useEffect(() => {
    //     if (selectedObject) {
    //         console.log(`settng camera`)
    //         console.log(selectedObject.camera)
    //         setCameraPosition(selectedObject.camera)
    //     }
    // },[selectedObject])

   

    return (
        <>
            <primitive useRef={elCap} object={gltf.scene} rotation={[ 0, -Math.PI/3, 0]} scale={7}/>
            {/* <ObjectHighlight /> */}

            <CameraControls
                ref={cameraControlsRef}
                enabled= {true}
                verticalDragToForward={false}
                enableTransition
                maxDistance={15}
                minDistance={1}
                maxPolarAngle={3*Math.PI/4}
                boundaryEnclosesCamera={true}
            />
            <hemisphereLight intensity={time === 'day' ? 1 : 0.2}/>
            <mesh position={[9, -1.74, 7.5]} rotation={[-Math.PI/2, 0, -Math.PI/24]}> 
                <planeGeometry attach="geometry" args={[47.62, 25]} />

                {/* <meshStandardMaterial map={floorMap}/> */}
            </mesh> 
            {/* {time === 'day' ? <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}/> : <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />} */}
        </>
    )
}