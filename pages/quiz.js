import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';

import QuizResult from '../src/components/QuizResult';
import QuizComponent from '../src/components/Quiz';

export default function Quiz() {
  const { questions } = db;
  const totalQuestions = questions.length;
  const { query: { playerName } } = useRouter();
  const [finished, setFinished] = useState(false);
  const [rightQuestions, setRightQuestions] = useState(0);

  return (
    <>
      {!finished ? (
        <QuizComponent
          setFinished={setFinished}
          rightQuestions={rightQuestions}
          setRightQuestions={setRightQuestions}
        />
      ) : (
        <QuizResult playerName={playerName} rights={rightQuestions} total={totalQuestions} />
      )}
    </>
  );
}
