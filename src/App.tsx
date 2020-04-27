import React, { FC } from 'react'
import './App.css'

import Game from './Game'

const App: FC = () => {
  return (
    <div style={{ border: 'solid red 1px', width: '750px', height: '500px' }} className="App">
      game:
      <Game />
    </div>
  )
}

export default App
