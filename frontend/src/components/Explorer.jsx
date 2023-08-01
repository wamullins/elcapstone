import { Canvas } from '@react-three/fiber'
import { HUD } from "./HUD"
import { ElCapScene } from './ElCapScene'

export const Explorer = () => {

    return (
        <>
            <HUD />
            <Canvas camera={{ position: [0,0,1], fov: 40}}>
                <ElCapScene />
            </Canvas>
        </>
   
    )
}