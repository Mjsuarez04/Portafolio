import { Route, Routes } from 'react-router'
import ProjectInfo from './components/ProjectInfo'
import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projectInfo' element={<ProjectInfo />} />
      </Routes>
    </div>
  )
}

export default App
