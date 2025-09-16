import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LevelOne from './LevelOne.jsx'
import LevelTwo from './LevelTwo.jsx'
import LevelThree from './LevelThree.jsx'
import Game from './Game2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
