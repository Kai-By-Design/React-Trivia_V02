// DISPLAY QUESTION, CHOICES,

// import questions from "./components/question.js";
import questions from "./questions";

function QuestionCard({ currentQ }) {
  console.log("QuestionCard");
  console.log(questions);
  console.log("currentQ", currentQ);

  // Styles of Components
  //  // gameBoard
  const gameBoard = {
    // width: "80%",
    // background: "linear-gradient(white, grey)", //#100241
    border: "2px solid blue",
    // textAlign: "center",
    // padding: "20px",
    borderRadius: "10px",
    // fontSize: "20px",
  };

  //  // Question
  const question = {
    width: "80%",
    background: "linear-gradient(white, grey)", //#100241
    border: "2px solid blue",
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "20px",
  };

  const answers = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const answer = {
    width: "25%",
    padding: "10px",
    textAlign: "center",
    background: "linear-gradient(#0e0124, #22074d)",
    border: "1px solid white",
    borderRadius: "15px",
    fontSize: "20px",
    fontWeight: "300",
    cursor: "pointer",
    margin: "0 10px 20px 10px",
  };

  return (
    <div className="question">
      <h1>QuestionCard</h1>
      {/* <h3 style={question}>Question: {questions[0].question}</h3> */}
      <h3 style={question}> "currentQ.question : "{currentQ.question} </h3>

      {/* map choices */}
      <div style={answers}>
        {/* <h3 className={answer} style={answer}>Question: {questions[0].choices[0]}</h3> */}
        <h3 className="answer">Question: {questions[0].choices[0]}</h3>
        <h3 className="answer">Question: {questions[0].choices[1]}</h3>
        <h3 className="answer">Question: {questions[0].choices[2]}</h3>
        <h3 className="answer">Question: {questions[0].choices[3]}</h3>
      </div>
    </div>
  );
}

export default QuestionCard;
