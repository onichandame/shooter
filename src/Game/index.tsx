import React, {FC,useState, useRef}  from 'react'
import {Canvas,useFrame} from 'react-three-fiber'

const Box:FC = ()=>{
  const [hover,setHover]=useState<boolean>(false)
  const [active,setActive]=useState<boolean>(false)

  const mesh=useRef<JSX.IntrinsicElements['mesh']>(null)
  useFrame(()=>{
    if(mesh &&mesh.current&&mesh.current.rotateX){
      mesh.current.rotateX(0.01)
    }
  })
  return (
    <mesh
      position={[-1.2,0,0]}
      ref={mesh}
      scale={active?[1.5,1.5,1.5]:[1,1,1]}
      onClick={()=>setActive(!active)}
      onPointerOver={()=>setHover(true)}
      onPointerOut={()=>setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1,1,1]} />
      <meshStandardMaterial attach="material" color={hover?'hotpink':'orange'}/>
    </mesh>
  )
}

export default ()=>(
  <Canvas>
    <ambientLight />
    <pointLight position={[10,10,10]}/>
    <Box />
  </Canvas>
)
