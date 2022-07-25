import React from 'react';

export default function Header() {
  return (
    <div className="w-full">
      <thead className="w-full border-b-2  text-xs border-my-custom-gray">
        <tr>
          <th className="p-3 w-2/6 tracking-wide text-center">Ação</th>
          <th className="p-3 w-2/6 tracking-wide text-center">Quantidade</th>
          <th className="p-3 w-2/6 pr-5 tracking-wide text-center">Valor</th>
          <th className="p-3 w-2/6 pr-6 tracking-wide text-center">Negociar</th>
        </tr>
      </thead>
    </div>
  );
}
