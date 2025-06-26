import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
