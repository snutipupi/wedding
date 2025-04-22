import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Venue from './components/Venue'
import Schedule from './components/Schedule'
import DressCode from './components/DressCode'
import Calendar from './components/Calendar'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LanguageProvider>
      <main className="overflow-hidden">
        <Hero />
        <Calendar />
        <Venue />
        <Schedule />
        <DressCode />
      </main>
    </LanguageProvider>
  )
}

export default App
