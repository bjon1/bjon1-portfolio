import { useState } from 'react'
import './App.css'

import Navigation from './components/Navigation'

import About from './components/About'
import Work from './components/Work'
import Resume from './components/Resume'


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
      {element}
    </>
  )
}

export default App
