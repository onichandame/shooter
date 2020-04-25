import React, {FC,useState, useRef,Suspense}  from 'react'
import {Canvas,useFrame,useLoader} from 'react-three-fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

const Box:FC = ()=>{
  const gltf=useLoader(GLTFLoader,'/scene.gltf')
  return (
    <primitive object={gltf.scene} dispose={null}/>
  )
}

export default ()=>(
  <Canvas>
    <ambientLight />
    <pointLight position={[10,10,10]}/>
    <Box />
  </Canvas>
)
