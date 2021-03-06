import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import db from '../../../db.json';

import Widget from '../Widget';
import ResultContent from './ResultContent/index';

export default function QuizResult({
  playerName,
  rights,
  total,
}) {
  const currentPlayer = useRef(null);

  useEffect(() => {
    if (currentPlayer.current) {
      currentPlayer.current.scrollIntoView();
    }
  }, [currentPlayer]);

  const isRegistered = db.results.map((item) => item.playerName).includes(playerName);

  db.results = isRegistered ? db.results : [
    ...db.results,
    {
      playerName, points: rights * 10,
    },
  ];

  const orderedResults = db.results.sort((a, b) => Number(a.points) - Number(b.points));
  orderedResults.reverse();

  return (
    <Widget>
      <Widget.Header>
        Resultados
      </Widget.Header>
      <ResultContent>
        <p>
          Muito bem,
          {' '}
          {playerName}
          !
        </p>
        <h1>
          Você acertou
          {' '}
          {rights}
          /
          {total}
          {' '}
          perguntas, parabéns!
        </h1>
        <ResultContent.List>
          {orderedResults.map((item, index) => (
            <li
              key={item.playerName}
              className={playerName === item.playerName ? 'highlight' : ''}
              ref={item.playerName === playerName ? currentPlayer : null}
            >
              <p>
                <span className="medal">{index + 1}</span>
                {item.playerName}
              </p>
              <p>
                <span>
                  {item.points}
                </span>
                <span>
                  pontos
                </span>
              </p>
            </li>
          ))}
        </ResultContent.List>
        <Link href="/">
          Voltar para a Home
        </Link>
      </ResultContent>
    </Widget>

  );
}
