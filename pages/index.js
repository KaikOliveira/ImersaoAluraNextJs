import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/components/Widget';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push({
      pathname: '/quiz',
      query: {
        playerName: name,
      },
    });
  }
  return (
    <>
      <Widget>
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>
        <Widget.Content>
          <form onSubmit={handleSubmit}>
            <p>{db.description}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <Widget.ConfirmButton disabled={!name}>
              JOGAR
            </Widget.ConfirmButton>
          </form>
        </Widget.Content>
      </Widget>
      <Widget>
        <Widget.Content>
          <h1>Quizes da galera</h1>
          <p>Aqui estão alguns exemplos de outros quizes feitos pela galera</p>
          <Widget.List>
            {db.external.map((item) => {
              const [, , , ...display] = item.split('/');
              return (
                <li key={item}>
                  <a
                    href={item}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {display.join('/')}
                  </a>
                </li>
              );
            })}
          </Widget.List>
        </Widget.Content>
      </Widget>
    </>
  );
}
