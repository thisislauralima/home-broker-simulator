import React from 'react';
import Header from '../../components/Header/Header';
import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <Header />
      <div>
        <h3 className="not-found-container">Ops!</h3>
        <h1 className="not-found-container">A página não foi encontrada.</h1>
      </div>
    </>
  );
}
