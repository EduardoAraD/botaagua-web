import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LayoutDefault } from '../layouts/default'
import { About } from '../pages/About'
import { Home } from '../pages/Home'
import { News } from '../pages/News'
import { Players } from '../pages/Players'

export function Paths() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutDefault />} path="/">
          <Route element={<Home />} index />
          <Route element={<About />} path="/sobre" />
          <Route element={<Players />} path="/elenco" />
          <Route element={<News />} path="/noticias" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
