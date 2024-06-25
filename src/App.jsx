import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Programs />
      </div>
    </>
  )
}

export default App