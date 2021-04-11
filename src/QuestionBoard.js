import { useState, useEffect, useRef } from "react";
import "./App.css";
import StoryBoard from "./StoryBoard";
import CardTest from "./test";

function QuestionBoard() {
  const questions = [
    {
      id: "0",
      question: "Who was there?"
    },
    {
      id: "1",
      question: "Who was there?"
    },
    {
      id: "2",
      question: "Where were you?"
    },
    {
      id: "3",
      question: "Where were you?"
    },
    {
      id: "4",
      question: "When did it happen?"
    },
    {
      id: "5",
      question: "When did it happen?"
    },
    {
      id: "6",
      question: "What happened?"
    },
    {
      id: "7",
      question: "What happened?"
    },
    {
      id: "8",
      question: "Why this story?"
    },
    {
      id: "9",
      question: "Was there any dialogue?"
    },
    {
      id: "10",
      question: "What did you see?"
    },
    {
      id: "11",
      question: "What did you see?"
    },
    {
      id: "12",
      question: "What did you hear?"
    },
    {
      id: "13",
      question: "What did you hear?"
    },
    {
      id: "14",
      question: "What did you feel?"
    },
    {
      id: "15",
      question: "What did you feel?"
    },
    {
      id: "16",
      question: "What did you smell?"
    },
    {
      id: "17",
      question: "What did you smell?"
    }
  ];

  const [currentQuestionId, setQuestion] = useState(0);
  const [userInput, setUserInput] = useState([]);
  const [progressPercentage, setWidth] = useState(0);
  const [toggleState, setToggleState] = useState("");
  const [showContainer, setShowContainer] = useState("");

  const [response, setResponse] = useState("");

  const currentQuestion = questions[currentQuestionId];

  const [currentValue, setCurrentValue] = useState("");

  const nextQuestion = () => {
    const newVar = [currentValue, currentQuestion.question, response];
    setUserInput([...userInput, newVar]);
    setCurrentValue("");
    setResponse("");

    const nextId = currentQuestionId + 1;
    const newStyle = progressPercentage + 5;
    const display = toggleState + "none";
    const show = showContainer + "grid";

    //HERE!
    if (nextId > 16) {
      setToggleState(display);
      setShowContainer(show);
    }
    setQuestion(nextId);
    setWidth(newStyle);
  };

  const handleInput = e => {
    setCurrentValue(e.target.value);
  };

  const handleText = e => {
    setResponse(e.target.value);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="container" style={{ display: toggleState }}>
          <div className="questionBoard active">
            <div className="questionContainer">
              <h3>{currentQuestion.question}</h3>
              <div className="inputContainer">
                <input
                  className="questionTitle"
                  type="text"
                  onChange={handleText}
                  value={response}
                ></input>
                <p>Give the card a memorable title</p>
              </div>
              <div className="textareaContainer">
                <h3>Notes</h3>
                <textarea
                  className="questionText"
                  id="questionText"
                  onChange={handleInput}
                  value={currentValue}
                ></textarea>
                <p>or continue without answering</p>
              </div>
            </div>
            <div className="btnsContainer">
              <div className="barContainer">
                <div
                  className="bar"
                  style={{ width: progressPercentage + "%" }}
                />
              </div>
              <div className="btnContainer " onClick={nextQuestion}>
                <button className="nextBtn">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="storyBoardSection" style={{ display: showContainer }}>
        <StoryBoard userInput={userInput} />
      </section>
    </div>
  );
}

export default QuestionBoard;