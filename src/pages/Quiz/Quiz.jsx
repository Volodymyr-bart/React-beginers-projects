import { useState } from "react";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: ["приложение", "часть приложения или страницы", "то, что я не знаю что такое"],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result({ correct, questions }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {questions}
      </h2>
      <button>Попробовать снова</button>
    </div>
  );
}

function Game({ question: { correct, title, variants }, onClickVariant, persent }) {
  return (
    <>
      <div className="progress">
        <div style={{ width: `${persent}%` }} className="progress__inner"></div>
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map((variant, index) => (
          <li key={variant} onClick={() => onClickVariant(index)}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const persent = Math.round((step / questions.length) * 100).toString();
  console.log(persent);

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <>
      <div className="App">
        {step !== questions.length ? (
          <Game question={question} onClickVariant={onClickVariant} persent={persent} />
        ) : (
          <Result correct={correct} questions={questions.length} />
        )}
      </div>
    </>
  );
};

export default Quiz;
