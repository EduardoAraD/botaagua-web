import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutDefault } from './layouts/default'
import { Home } from './pages/Home'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutDefault />} path="/">
          <Route element={<Home />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
