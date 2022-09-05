import React from 'react';
import { Link } from 'react-router-dom';

export default function AskToInvest() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <p>Você ainda não possui investimentos.</p>
      <p>Que tal dar uma olhada nas nossas cotações?</p>
      <div className="flex">
        <p className="mr-1">Clique</p>
        <Link
          to="/acoes"
          className="mr-1 cursor-pointer underline text-my-custom-orange-darker"
        >
          aqui

        </Link>
        <p>para conferir!</p>
      </div>
    </main>
  );
}
