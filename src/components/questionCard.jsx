// DISPLAY QUESTION, CHOICES,

// import questions from "./components/question.js";
// import { useState, React} from ""
import { useState } from "react";
import questions from "./questions";

// {/* map choices */}
// export default function ChoiceMap() {
//   return (
//     <div>
//       {questions[currentQ].choices.map((choice) => {
//        return <h3> {choice}</h3>;
//       })}
//     </div>
//   )
// }

function QuestionCard({ currentQ }) {
  // console.log("QuestionCard");
  // console.log("questions:  ", questions);
  // console.log("currentQ", currentQ);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  {
    /* map choices */
  }
  {
    /* function ChoiceMap() {
    return (
      <>
        {questions[currentQ].choices.map((choice) => {
         return <h3> {choice}</h3>;
        })}
      </>
    )
  } */
  }

  const rightAnswers = 0;
  const wrongAnswers = 0;

  const handleClick = (answerSelected) => {
    // console.log("test fire");
    // console.log("className:  ", { className });
    // console.log("setClassName:  ", { setClassName });
    // console.log("className:  ", { className });
    // console.log("ANSWER:  ", answerSelected);
    // console.log(
    //   "answer: ",
    //   questions[currentQ.id].answer,
    //   " is ",
    //   answerSelected === questions[currentQ.id].answer
    // );
    const correctAnswer = answerSelected === questions[currentQ.id].answer;
    console.log("correctAnswer: expecting True", correctAnswer);
    setSelectedAnswer(answerSelected);
    // setClassName("answer active");
    setClassName(correctAnswer ? "answer correct" : "answer wrong");
  };

  // const handleChange = (event) => handleClick(event.target.value);

  return (
    <div className="question">
      <h1 className="questionNumber">
        Question #{currentQ.id + 1} of <span>{questions.length}</span>
      </h1>
      <h2 className="questionText">{currentQ.question} </h2>

      <div className="answers">
        {questions[currentQ.id].choices.map((a) => (
          // console.log("AAA: ", a)
          // console.log("aswer:  ", questions[currentQ.id].answer)
          <button
            // key={currentQ.id}
            // className="answer"
            // className={
            //   selectedAnswer === questions[currentQ.id].answer
            //     ? className
            //     : "answer"
            // }
            className={selectedAnswer === a ? className : "answer"}
            // {onClick={handleClick(a)}
            // onClick={handleClick}
            // onChange={handleChange}
            onClick={() => handleClick(a)}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;

{
  /* <div
            className="answer"
            className={selectedAnswer === a ? className : "answer"}
            // {onClick={handleClick(a)}
            onClick={handleClick}
            // onClick={() => handleClick(a)}
          >
            {a}
          </div> */
}

{
  /* <div className="answers">
        {questions[currentQ.id].choices.map((a) => (
          // console.log("AAA: ", a)
          <div className="answer">{a}</div>
        ))}
        {/* <h3 className={answer} style={answer}>Question: {questions[0].choices[0]}</h3> */
}
{
  /* <h3 className="answer">Question: {currentQ.choices[0]}</h3> */
}
{
  /* {questions.choices.map((choice) => {
          return <h3> {choice}</h3>;
        })} */
}
{
  /* ChoiceMap() */
}

{
  /* below works to display choices */
}
{
  /* <h3 className="answer" onClick={() => console.log("choice 0 Clicked")}>
          {currentQ.choices[0]}
        </h3>
        <h3 className="answer">{currentQ.choices[1]}</h3>
        <h3 className="answer">{currentQ.choices[2]}</h3>
        <h3 className="answer">{currentQ.choices[3]}</h3> */
}
// </div> */}
