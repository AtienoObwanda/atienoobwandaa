import React from 'react'
import Nav from './Layout/Nav'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Certification from './Components/Certification'
import Contact from './Components/Contact'

const App = () => {
  return (
<>
<div className="relative bg-gray-50 dark:bg-slate-900 w-screen h-screen">

<Nav/>
<Hero/>
<About/>
<Skills/>
<Projects/>
<Experience/>
<Education/>
<Certification/>
<Contact/>
</div>
</>
  )
}

export default App