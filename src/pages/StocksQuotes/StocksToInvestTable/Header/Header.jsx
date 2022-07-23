import React from 'react';

export default function Header() {
  return (
    <div className="w-[400px]">
      <thead>
        <tr>
          <th className="p-3 w-2/6 tracking-wide text-center">Ação</th>
          <th className="p-3 w-2/6 tracking-wide text-center">Quantidade</th>
          <th className="p-3 w-2/6 tracking-wide text-center">Valor</th>
          <th className="p-3 w-2/6 tracking-wide text-left">Negociar</th>
        </tr>
      </thead>
    </div>
  );
}
