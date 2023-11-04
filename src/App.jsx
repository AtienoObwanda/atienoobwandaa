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
import Footer from './Layout/Footer'
import GitHub from './Components/GitHub'

const App = () => {
  return (
<>
<div className="relative bg-gray-50 dark:bg-slate-900 w-screen h-full overflow-x-none	overflow-y-none">

<Nav/>
<div className="ml-[18em] pt-[10em] md:ml-[120px]">
<Hero/>
<About/>
{/* <Skills/> */}
<Projects/>
<Experience/>


{/* <Education/> */}
{/* <Certification/> */}
<GitHub/>
<Contact/>
<Footer/>
</div>
</div>
</>
  )
}

export default App