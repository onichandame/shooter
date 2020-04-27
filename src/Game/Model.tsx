/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import 'three'
import React,{FC} from 'react'
import {useLoader} from 'react-three-fiber'
import{GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

const Model:FC=()=>{
  const gltf=useLoader(GLTFLoader, '/models/scene.gltf')
  return(
    <primitive object={gltf.scene} dispose={null}/>
  )
}
export default Model
