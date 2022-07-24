/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/rico.png';
import './header.css';
import stockContext from '../../context/stockContext';

export default function Header() {
  const { setErrorMessage } = useContext(stockContext);
  const history = useHistory();

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('userInfo'))) {
      history.push('/login');
    }
  });

  const cleanErrorMessage = () => {
    setErrorMessage('');
  };

  return (
    <header className="flex items-center justify-between text-base h-14 w-full bg-purple-header">
      <div className="flex items-center justify-between">
        <img className="h-14 w-24" src={ logo } alt="logo" />
        <Link className="mx-4" onClick={ cleanErrorMessage } to="/acoes/">Cotações</Link>
        <Link onClick={ cleanErrorMessage } to="/acoes/carteira">Carteira</Link>
        {/* <div>
          {
          JSON.parse(localStorage.getItem('userInfo'))
            ? <p>{JSON.parse(localStorage.getItem('userInfo')).email }</p> : history.push('/login')
          }
          </div> */}
      </div>
      <div className="mx-4 relative inline-block text-left">
        <button type="button" className="px-1 flex items-center justify-center w-full h-14 bg-my-custom-orange-darker text-sm font-medium text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
          Opções
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            <Link className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Depósito/ retirada</Link>
            <Link className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Sair</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
