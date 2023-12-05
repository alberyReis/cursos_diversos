import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './componentes/Menu';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Inicio from "./paginas/Inicio";
import SobreMim from './paginas/SobreMim';
import Post from 'paginas/Post';
import Rodape from 'componentes/Rodape';
import PaginaNaoEncotrada from 'componentes/PaginaNaoEncontrada';
import ScrollToTop from 'componentes/ScrollToTop';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route path='/' element={<Inicio />} />
          <Route path='/sobremim' element={<SobreMim />} />
        </Route>
        <Route path='posts/:id' element={<Post />} />
        <Route path='*' element={<PaginaNaoEncotrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;