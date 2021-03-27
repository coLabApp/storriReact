import { useState, useEffect, useRef } from 'react';
import './App.css';
import StoryBoard from './StoryBoard';

function QuestionBoard() {

    const questions = [{
        id:0,
        question:"Who was there?",
    
    },
    {
        id:1,
        question:"Who was there?",
    
    },
    {
        id:2,
        question:"Where were you?",

    
    },
    {
        id:3,
        question:"Where were you?",

    
    },
    {
        id:4,
        question:"When did it happen?",

    
    },
    {
        id:4,
        question:"When did it happen?",

    
    },
    {
        id:5,
        question:"What happened?",

    
    },
    {
        id:6,
        question:"What happened?",

    
    },
    {
        id:7,
        question:"Why this story?",

    
    }, {
        id:8,
        question:"Was there any dialogue?",

    
    },
    {
        id:9,
        question:"What did you see?",

    
    },
    {
        id:10,
        question:"What did you see?",

    
    },
    {
        id:11,
        question:"What did you hear?",
 
    },
    {
        id:12,
        question:"What did you hear?",
 
    },
    {
        id:13,
        question:"What did you feel?",
    },
    {
        id:14,
        question:"What did you feel?",
    },
    {
        id:15,
        question:"What did you smell?",
    },
    {
        id:16,
        question:"What did you smell?",
    }
    ]

    const [currentQuestionId, setQuestion] = useState(0);
    const [userInput, setUserInput] = useState([]);
    const [progressPercentage, setWidth] = useState(0)
    const [toggleState, setToggleState] = useState("");
    const [showContainer, setShowContainer] = useState("")

    const [response, setResponse] = useState("");

    const currentQuestion = questions[currentQuestionId];
    
    const [currentValue, setCurrentValue] = useState("")

    const nextQuestion = () =>{
        const newVar = ([currentValue, currentQuestion.question, response]);
        setUserInput([...userInput, newVar]);
        setCurrentValue('');
        setResponse('')

        const nextId = currentQuestionId + 1;
        const newStyle = progressPercentage + 5;
        const display = toggleState + "none"
        const show = showContainer + "grid"

       
        if (nextId > 16){
            setToggleState(display)
            setShowContainer(show)
        }
        setQuestion(nextId)
        setWidth(newStyle)
    }

    const handleInput = (e) =>{
         setCurrentValue(e.target.value)
    }

    const handleText =(e) =>{
        setResponse(e.target.value)
    }

    const swapBoxes = (fromBox, toBox) => {
        let questions = questions.slice();
        let fromIndex = -1;
        let toIndex = -1;
    
        for (let i = 0; i < questions.length; i++) {
          if (questions[i].id === fromBox.id) {
            fromIndex = i;
          }
          if (questions[i].id === toBox.id) {
            toIndex = i;
          }
        }
    
        if (fromIndex != -1 && toIndex != -1) {
          let { fromId, ...fromRest } = questions[fromIndex];
          let { toId, ...toRest } = questions[toIndex];
          questions[fromIndex] = { id: fromBox.id, ...toRest };
          questions[toIndex] = { id: toBox.id, ...fromRest };
    
          this.setState({ questions: questions });
        }
      };

      const handleDragStart = data => event => {
        let fromBox = JSON.stringify({ id: data.id });
        event.dataTransfer.setData("dragContent", fromBox);
      };

      const handleDragOver = data => event => {
        event.preventDefault(); // Necessary. Allows us to drop.
        return false;
      };

      const handleDrop = data => event => {
        event.preventDefault();
      
        let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
        let toBox = { id: data.id };
      
        this.swapBoxes(fromBox, toBox);
        return false;
      };


      



    
  return (
    <div>
        <div className="wrapper">
            <div className="container" style={{display: toggleState}}>
                <div className="questionBoard active"  >
                    <div className="questionContainer" >
                        <h3>{currentQuestion.question}</h3>
                        <div className="inputContainer">
                            <input className="questionTitle" type="text"  onChange={handleText} value={response}></input>
                            <p>Give the card a memorable title</p>
                        </div>
                        <div className="textareaContainer">
                            <h3>Notes</h3>
                            <textarea className="questionText" id="questionText" onChange={handleInput} value={currentValue}></textarea>
                            <p>or continue without answering</p>
                        </div>
                    </div>
                    <div className="btnsContainer">
                    <div className="barContainer" >
                        <div className="bar" style={{ width: progressPercentage + "%" }} />
                    </div>
                    <div className="btnContainer " onClick={nextQuestion}>
                        <button className="nextBtn">Continue</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="storyBoardSection" style={{display: showContainer}}>
        <StoryBoard  userInput={userInput}       
      dragStart={handleDragStart}
      dragOver={handleDragOver}
      drop={handleDrop}/>
        </section>
    </div>
  )
}

export default QuestionBoard;