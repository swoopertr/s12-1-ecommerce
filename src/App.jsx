import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Home } from './pages/Home'
import { Layout } from './layouts/layout'
import { Categories } from './pages/Categories'
import DarkMode from './components/DarkMode'

function App() {
 
  return (
    
    <Layout>
      
      <Home />
      <Categories />
    </Layout>

  )
}

export default App
