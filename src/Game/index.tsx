import React, {FC,useState, useRef,Suspense}  from 'react'
import {Canvas,useFrame,useLoader} from 'react-three-fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

import {} from './Model'

const Game:FC = ()=>{
  const gltf=useLoader(GLTFLoader,'/scene.gltf')
  return (
    <primitive object={gltf.scene} dispose={null}/>
  )
}

export default Game
