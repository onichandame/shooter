import React, { FC, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'

import Model from './Model'

const Game: FC = () => {
  return (
    <Canvas
      camera={{
        position: [0, 3, 5],
        fov: 75,
        near: 0.1,
        far: 1000
      }}
    >
      <Suspense fallback={'loading'}>
        <Model />
      </Suspense>
    </Canvas>
  )
}

export default Game
