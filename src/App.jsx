import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import '../manifest.json'
// Importe o componente da página de perfil
import PaginaPerfil from './components/Perfil'; // Substitua 'PaginaPerfil' pelo nome do seu componente de perfil
import PaginaLivros from './components/Livro';
import PaginaConfig from './components/Config';

function ListaDeItens() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  return (
    <Router className='DivPrincipal'>
      <div className='DivPrincipal'>
        <div className="input">
          <Link to="/perfil" className="input">
            <button
              className={`value ${activeButton === 'Perfil' ? 'active' : ''}`}
              onClick={() => handleButtonClick('Perfil')}
            >
              <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="m1.5 13v1a.5.5 0 0 0 .3379.4731 18.9718 18.9718 0 0 0 6.1621 1.0269 18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0 -4.461-6.1676 3.5 3.5 0 1 0 -4.078 0 6.5083 6.5083 0 0 0 -4.461 6.1676zm4-9a2.5 2.5 0 1 1 2.5 2.5 2.5026 2.5026 0 0 1 -2.5-2.5zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1 -11 0v-.6392a5.5066 5.5066 0 0 1 5.5-5.5z" fill="#fffafa"></path></svg>
              Perfil
            </button>
          </Link>
          <Link to="/livro" className="input">
            <button
              className={`value ${activeButton === 'Livro' ? 'active' : ''}`}
              onClick={() => handleButtonClick('Livro')}
            >
              <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z" fill="#fffafa" /></svg>
              Livros
            </button>
          </Link>

          <p></p>
          <p></p>

          <Link to="/config" className="input">
            <button
              className={`value ${activeButton === 'Config' ? 'active' : ''}`}
              onClick={() => handleButtonClick('Config')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Line"><path d="m17.074 30h-2.148c-1.038 0-1.914-.811-1.994-1.846l-.125-1.635c-.687-.208-1.351-.484-1.985-.824l-1.246 1.067c-.788.677-1.98.631-2.715-.104l-1.52-1.52c-.734-.734-.78-1.927-.104-2.715l1.067-1.246c-.34-.635-.616-1.299-.824-1.985l-1.634-.125c-1.035-.079-1.846-.955-1.846-1.993v-2.148c0-1.038.811-1.914 1.846-1.994l1.635-.125c.208-.687.484-1.351.824-1.985l-1.068-1.247c-.676-.788-.631-1.98.104-2.715l1.52-1.52c.734-.734 1.927-.779 2.715-.104l1.246 1.067c.635-.34 1.299-.616 1.985-.824l.125-1.634c.08-1.034.956-1.845 1.994-1.845h2.148c1.038 0 1.914.811 1.994 1.846l.125 1.635c.687.208 1.351.484 1.985.824l1.246-1.067c.787-.676 1.98-.631 2.715.104l1.52 1.52c.734.734.78 1.927.104 2.715l-1.067 1.246c.34.635.616 1.299.824 1.985l1.634.125c1.035.079 1.846.955 1.846 1.993v2.148c0 1.038-.811 1.914-1.846 1.994l-1.635.125c-.208.687-.484 1.351-.824 1.985l1.067 1.246c.677.788.631 1.98-.104 2.715l-1.52 1.52c-.734.734-1.928.78-2.715.104l-1.246-1.067c-.635.34-1.299.616-1.985.824l-.125 1.634c-.079 1.035-.955 1.846-1.993 1.846zm-5.835-6.373c.848.53 1.768.912 2.734 1.135.426.099.739.462.772.898l.18 2.341 2.149-.001.18-2.34c.033-.437.347-.8.772-.898.967-.223 1.887-.604 2.734-1.135.371-.232.849-.197 1.181.089l1.784 1.529 1.52-1.52-1.529-1.784c-.285-.332-.321-.811-.089-1.181.53-.848.912-1.768 1.135-2.734.099-.426.462-.739.898-.772l2.341-.18h-.001v-2.148l-2.34-.18c-.437-.033-.8-.347-.898-.772-.223-.967-.604-1.887-1.135-2.734-.232-.37-.196-.849.089-1.181l1.529-1.784-1.52-1.52-1.784 1.529c-.332.286-.81.321-1.181.089-.848-.53-1.768-.912-2.734-1.135-.426-.099-.739-.462-.772-.898l-.18-2.341-2.148.001-.18 2.34c-.033.437-.347.8-.772.898-.967.223-1.887.604-2.734 1.135-.37.232-.849.197-1.181-.089l-1.785-1.529-1.52 1.52 1.529 1.784c.285.332.321.811.089 1.181-.53.848-.912 1.768-1.135 2.734-.099.426-.462.739-.898.772l-2.341.18.002 2.148 2.34.18c.437.033.8.347.898.772.223.967.604 1.887 1.135 2.734.232.37.196.849-.089 1.181l-1.529 1.784 1.52 1.52 1.784-1.529c.332-.287.813-.32 1.18-.089z" id="XMLID_1646_" fill="#fffafa"></path><path d="m16 23c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" fill="#fffafa" id="XMLID_1645_"></path></svg>              Configurações
            </button>
          </Link>
        </div>
        <Routes>
          <Route path="/perfil" element={<PaginaPerfil />} />
          <Route path="/livro" element={<PaginaLivros />} />
          <Route path="/config" element={<PaginaConfig />} />
        </Routes>
      </div>
    </Router>
  );
}

export default ListaDeItens;
