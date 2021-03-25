import { useState, useEffect, useRef } from 'react';
import './App.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import StoryBoard from './StoryBoard';

function QuestionBoard() {

    const questions = [{
        id:0,
        question:"Who was there / were you with anyone?",
    
    },
    {
        id:1,
        question:"Where were you / Where did this take place?",

    
    },
    {
        id:2,
        question:"What happened?",

    
    },
    {
        id:3,
        question:"What could you see? What could you hear? What could you feel? What could you smell?",

    
    },
    {
        id:4,
        question:"Think about how you could bring the characters in your story to life?",

    
    }, {
        id:5,
        question:"Do you have photo or video of any aspect or characters in this story?",

    
    },
    {
        id:6,
        question:"What do you this this story could represent or symbolize?",

    
    },
    {
        id:7,
        question:"What is the point of this story? [Think: /*The reason I'm telling you this is because _____*/] ",
 
    },
    {
        id:8,
        question:"blank",
    }
    // {
    //     id:9,
    //     question:"blank",
    //     textarea:document.getElementById('questionText').value
    // },
    ]

    const [currentQuestionId, setQuestion] = useState(0);
    const [userInput, setUserInput] = useState([]);
    const [progressPercentage, setWidth] = useState(0)
    const [toggleState, setToggleState] = useState("");
    const [showContainer, setShowContainer] = useState("")

    const [response, setResponse] = useState([]);

    const currentQuestion = questions[currentQuestionId];
    
    const [currentValue, setCurrentValue] = useState("")

    const nextQuestion = () =>{
        const newVar = [currentQuestion.question,currentValue];
        setUserInput([...userInput, newVar]);
        setCurrentValue('')

        // setUserInput([currentQuestion.question.value, currentQuestion.textarea.value])
        const nextId = currentQuestionId + 1;
        const newStyle = progressPercentage + 14;
        const display = toggleState + "none"
        const show = showContainer + "grid"
        // if(userInput[1] !== ""){
        //     setUserInput([...userInput, newVar]) 
        // }  else {setResponse([...response, questions[currentQuestionId]])}

       
        if (nextId > 7){
            setToggleState(display)
            setShowContainer(show)
        }
        setQuestion(nextId)
        setWidth(newStyle)
    }

    const handleInput = (e) =>{
         setCurrentValue(e.target.value)
    }



    // const { handleChange, handleSubmit } = useHandleInput('');



    
  return (
    <div>
        <div className="wrapper">
            <div className="container" style={{display: toggleState}}>
                <div className="questionBoard active"  >
                    <div className="questionContainer" >
                        <div className="inputContainer">
                            <input className="questionTitle" type="text"  onChange={handleInput} placeholder={currentQuestion.question}></input>
                        </div>
                        <div className="textareaContainer">
                            <textarea className="questionText" id="questionText" onChange={handleInput} value={currentValue} ></textarea>
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
        <StoryBoard  userInput={userInput}/>
        </section>
    </div>
  )
}

export default QuestionBoard;