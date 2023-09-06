// "use client"

// import { useContext, useState, useEffect, useRef } from 'react'
// import CollectionContext from '@/contexts/CollectionContext'
// import SelectedObjectContext from '@/contexts/SelectedObjectContext'
// import { Box, Line, Cylinder, Octahedron, Html } from "@react-three/drei"
// import { useRouter } from 'next/router'
// import { useFrame } from "@react-three/fiber"

// export const ObjectHighlight = () => { 

//     // let location = useLocation().pathname;

//     let location = "/"

//     const [hovered, setHovered] = useState('');
//     const [invisible, setInvisible] = useState('');
//     const { collection } = useContext(CollectionContext)
//     const { selectedObject, setSelectedObject } = useContext(SelectedObjectContext)

//     const divStyle = {
//         backgroundColor: '#24242499',
//         color: "white",
//         fontWeight: "100",
//         minWidth: "180px",
//         padding: "2px",
//         borderRadius: "8px",
//         textAlign: "center",
//     }  

//     // when the object state changes, prime that object to become invisible when hovered
//     useEffect(() => {
//         if (!selectedObject) {
//             setInvisible('')
//             return
//         }
//         setHovered('')
//         setInvisible(selectedObject.name)
//     },[selectedObject])


//     // for the octahedrons
//     // taken from here https://onion2k.github.io/r3f-by-example/examples/hooks/rotating-cube/

//     const Oct = ({ idx, item}) => {
//         const octRef = useRef();

//         useFrame(() => {
//             octRef.current.rotation.y += 0.01;
//         })

//         const labelPos = [item.highlight.position[0],item.highlight.position[1]+0.3,item.highlight.position[2]];

//         return (
//             <>
//                 {hovered === idx ? 
//                     <Html position={labelPos}>
//                         <div className='highlight-label' style={divStyle}>{item.name}</div>
//                     </Html> : <></> 
//                 }
//                 <Octahedron ref={octRef} args={[0.1]} position={item.highlight.position} onClick={()=> setSelectedObject(item)} onPointerOver={() => setHovered(idx)} onPointerOut={() => setHovered('')}> 
//                     <meshMatcapMaterial transparent color={hovered === idx ? "white": "green"} opacity={invisible=== item.name ? 0.01 : 0.6}/>
//                 </Octahedron> 
//             </>
            
//         )
//     }

//     const Trail = ({idx, item}) => {
//         return (
//             <>
//                 {hovered === idx ? 
//                     <Html position={[item.points[0][0],item.points[0][1]+0.3,item.points[0][2]]}>
//                         <div className='highlight-label' style={divStyle}>{item.name}</div>
//                     </Html> : <></> 
//                 }
//                 <Line key={idx} points={item.points} onClick={()=> setSelectedObject(item)} lineWidth={15} dashed={false} color={hovered === idx ? "white": "red"} transparent onPointerOver={() => setHovered(idx)} onPointerOut={() => setHovered('')} opacity={hovered === idx && invisible=== item.name ? 0.01 : 0.5} />  
//             </>
//         )
//     }

//     if (!collection) {
//         return <></>
//     }

//     if (location === "/features") {
//         return (
//             <> 
//                 {collection.map((item, idx) => (
//                     <Oct key={idx} idx={idx} item={item} /> 
//                 ))} 

//                 {/* <Octahedron args={[0.1]} position={[2.8, 0.6, 1.2]} > 
//                     <meshMatcapMaterial transparent color={"green"} opacity={0.6}/>
//                 </Octahedron>  */}
//             </>
//         )
//     } 
    
//     if (location === "/climbs") return (
//         <> 
//             {collection.map((item, idx) => (
//                 <Trail key={idx} idx={idx} item={item}/>
//             ))}

//             {/* <Line points={[[-0.59, 1.79, -0.35],[-0.73, 1.55, -0.45],[-0.84, 1.29, -0.38],[-0.87, 1.25, -0.34],[-1, 0.69, -0.16],[-0.97, 0.74, -0.3],[-1.05, 0.22, -0.22],[-1.1, 0.02, -0.3],[-1.14, -0.02, -0.3],]} color="red" lineWidth={15} dashed={false} transparent opacity={0.5}/> */}

//         </>
//     )
        

   
    
// }