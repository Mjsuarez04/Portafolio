import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {

  return (
    <div className="App">
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
