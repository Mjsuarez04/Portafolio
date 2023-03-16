import React from 'react'
import Sidenav from '../components/Sidenav'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home