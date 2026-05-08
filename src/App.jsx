import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Home } from './pages/Home'
import { Layout } from './layouts/layout'

function App() {
 
  return (
    <Layout>
      <Home />
    </Layout>
    
  )
}

export default App
