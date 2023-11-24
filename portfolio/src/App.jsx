import { useState } from 'react'
import './App.css'

import Navigation from './scenes/Navigation'
import About from './scenes/About/About'
import Work from './scenes/Work/Work'
import Resume from './scenes/Resume/Resume'

import { useRoutes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const element = useRoutes([
    { 
      path: '/',
      element: <Work/>
    },
    {
      path: '/work',
      element: <Work/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/resume',
      element: <Resume/>
    }
  ])

  return (
    <>
      <Navigation />
      <div>
        {element}
      </div>
    </>
  )
}

export default App
