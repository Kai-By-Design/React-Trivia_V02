import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import questions from "./components/questions";
import "./App.css";

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [correctScore, setCorrectScore] = useState(0);
  const [incorrectScore, setIncorrectScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Track which questions are answered
  const [isBack, setIsBack] = useState(false);

  const totalQuestions = questions.length;

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleNext = () => {
    setIsBack(false);
    if (currentQ < totalQuestions - 1) {
      setCurrentQ((prevQ) => prevQ + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleBack = () => {
    setIsBack(true);
    if (currentQ > 0) {
      setCurrentQ((prevQ) => prevQ - 1);
    }
  };

  const handleAnswerSelection = (isCorrect) => {
    if (!answeredQuestions.includes(currentQ)) {
      // Only update the score if the question hasn't been answered
      setAnsweredQuestions((prev) => [...prev, currentQ]); // Mark the question as answered
      if (isCorrect) {
        setCorrectScore((prev) => prev + 1);
      } else {
        setIncorrectScore((prev) => prev + 1);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setCorrectScore(0);
    setIncorrectScore(0);
    setQuizStarted(true);
    setQuizFinished(false);
    setAnsweredQuestions([]); // Reset answered questions
  };

  const getPerformanceMessage = () => {
    const percentage = (correctScore / totalQuestions) * 100;

    if (percentage === 100) return "Wow! You achieved a perfect score!";
    if (percentage >= 90) return "You are a top performer!";
    if (percentage >= 70)
      return "Great Work! Your studying is really paying off!";
    if (percentage >= 50)
      return "Good Work! It looks like you have been studying! Keep it up!";
    return "Good Effort! Keep Studying!";
  };

  return (
    <div className="gameBoard">
      {!quizStarted ? (
        <div className="landingPage">
          <h1>Welcome to a Coding Trivia Quiz!</h1>
          <button className="startButton" onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      ) : quizFinished ? (
        <div className="recapPage">
          <h1>Quiz Completed!</h1>
          <p>Correct Answers: {correctScore}</p>
          <p>Incorrect Answers: {incorrectScore}</p>
          <p>
            Your Score: {correctScore} out of {totalQuestions} (
            {((correctScore / totalQuestions) * 100).toFixed(2)}%)
          </p>
          <p>{getPerformanceMessage()}</p>
          <button className="restartButton" onClick={restartQuiz}>
            Take Quiz Again
          </button>
        </div>
      ) : (
        <>
          <div className="scoreBoard">
            <p>
              Correct: {correctScore} | Incorrect: {incorrectScore}
            </p>
          </div>
          <QuestionCard
            currentQ={questions[currentQ]}
            handleAnswerSelection={handleAnswerSelection}
            isBack={isBack}
            hasBeenAnswered={answeredQuestions.includes(currentQ)} // Pass if the question was already answered
          />
          <div className="buttonContainer">
            <button
              className="nextBackButtons"
              onClick={handleBack}
              disabled={currentQ === 0}
            >
              Back
            </button>
            <button className="nextBackButtons" onClick={handleNext}>
              {currentQ < totalQuestions - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
