import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import Create from './Create'
import Update from './Update'
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/create' element={<Create />} />
      <Route path='/update/:id' element={<Update />} />
     </Routes>
    </>
  )
}

export default App
