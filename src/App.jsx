import './App.css'
import Home from './components/Home'
import CreateDoc from './components/CreateDoc'
import ViewDoc from './components/ViewDoc'
import { Routes, Route } from 'react-router-dom'
import EditDoc from './components/EditDoc'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="createdoc" element={<CreateDoc />}></Route>
        <Route path='/ViewDoc/:id' element={<ViewDoc />}></Route>
        <Route path="/editDoc/:id" element={<EditDoc />} />

      </Routes>

    </>
  )
}

export default App