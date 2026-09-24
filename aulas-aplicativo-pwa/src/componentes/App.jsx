import PaginaInicial from '../paginas/PaginaInicial/PaginaInicial';
import './App.css'
import Cabecalho from './cabecalho/Cabecalho'
import Principal from './principal/Principal'
import Rodape from './rodape/Rodapé'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const roteador = createBrowserRouter([
{
path: '',
element: <PaginaInicial/>
},
]);

function App() {

  return (
    <>
      <Cabecalho/>
      <RouterProvider router={roteador} />
      <Rodape />
    </>
  )
}

export default App
