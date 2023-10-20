import './App.css'
import { BrowserRouter, Routers, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path='/' element = {<home />}></Route>
            <Route path='/about' element = {<about />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
