import { useState, useEffect } from "react";
import questions from "./questions";

function QuestionCard({
  currentQ,
  handleAnswerSelection,
  isBack,
  hasBeenAnswered,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);

  const correctAnswer = questions[currentQ.id].answer;

  useEffect(() => {
    if (!isBack) {
      setSelectedAnswer(null);
      setAnswerStatus(null);
    }
  }, [currentQ, isBack]);

  const handleChoiceClick = (answerSelected) => {
    if (selectedAnswer === null) {
      const isCorrect = answerSelected === correctAnswer;
      setSelectedAnswer(answerSelected);
      setAnswerStatus(isCorrect ? "correct" : "wrong");
      handleAnswerSelection(isCorrect);
    }
  };

  return (
    <div className="question">
      <h1 className={`questionNumber ${isBack ? "backMode" : ""}`}>
        Question #{currentQ.id + 1} of <span>{questions.length}</span>
      </h1>
      <h2 className="questionText">{currentQ.question}</h2>

      <div className="answers">
        {questions[currentQ.id].choices.map((a, index) => (
          <button
            key={index}
            className={`answer ${
              selectedAnswer === a
                ? answerStatus === "correct"
                  ? "correct"
                  : "wrong"
                : ""
            } ${isBack ? "backMode" : ""}`}
            onClick={() => handleChoiceClick(a)}
            disabled={selectedAnswer !== null || hasBeenAnswered} // Disable if already answered
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
