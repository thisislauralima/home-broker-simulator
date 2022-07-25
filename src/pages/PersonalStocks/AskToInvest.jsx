import React from 'react';
import { Link } from 'react-router-dom';

export default function AskToInvest() {
  return (
    <main>
      <p>Você ainda não possui investimentos.</p>
      <p>Que tal dar uma olhada nas nossas cotações?</p>
      <Link to="/acoes">Clique aqui para conferir!</Link>
    </main>
  );
}
