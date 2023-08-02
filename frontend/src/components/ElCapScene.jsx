import { Suspense, useRef, useContext, useEffect } from 'react'
import * as THREE from 'three';
import { CameraControls, Box, Circle } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import CameraPositionContext from '../CameraPositionContext'
import SelectedObjectContext from '../SelectedObjectContext'
import { ObjectHighlight } from './ObjectHighlight'
import pic from '../../public/yosemite_top_map.png'

export const ElCapScene = () => {

    const gltf = useLoader(GLTFLoader, '/el_capitan/scene.gltf')
    const floorMap = useLoader(THREE.TextureLoader, pic)
    const { cameraPosition, setCameraPosition } = useContext(CameraPositionContext)
    const { selectedObject } = useContext(SelectedObjectContext)
    const cameraControlsRef = useRef()
    const elCap = useRef()

    useEffect(()=> {
        const cameraBoundary = new THREE.Box3(
            new THREE.Vector3( -7.0,-1.5, -1.5 ),
            new THREE.Vector3( 7.0, 10.0, 10.0 )
        );
        cameraControlsRef.current?.setBoundary(cameraBoundary)
    },[])
    
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


    const cameraBox = () => {
        
    } 



    return (
        <>
            <primitive useRef={elCap} object={gltf.scene} rotation={[ 0, -Math.PI/3, 0]} scale={7}/>
            <ObjectHighlight />

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
            <hemisphereLight intensity={0.1}/>
            <mesh position={[9, -1.74, 7.5]} rotation={[-Math.PI/2, 0, -Math.PI/24]}> 
                <planeGeometry attach="geometry" args={[47.62, 25]} />
                <meshStandardMaterial map={floorMap} roughness={1}/>
            </mesh> 
            {/* <Circle position={[0, -1.74, 0]} args={[100,0.1,100]}/> */}
            {/* <spotLight position={[0,7,0]} intensity={1} /> */}
        </>
    )
}