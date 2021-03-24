import { useState, useEffect, useRef } from 'react';
import './App.css';
import useHandleInput from './useHandleInput'

function QuestionBoard() {

    const questions = [{
        id:0,
        question:"Who was there / were you with anyone?",
        textarea:""
    
    },
    {
        id:1,
        question:"Where were you / Where did this take place?",
        textarea:""
    
    },
    {
        id:2,
        question:"What happened?",
        textarea:""
    
    },
    {
        id:3,
        question:"What could you see? What could you hear? What could you feel? What could you smell?",
        textarea:""
    
    },
    {
        id:4,
        question:"Think about how you could bring the characters in your story to life?",
        textarea:""
    
    }, {
        id:5,
        question:"Do you have photo or video of any aspect or characters in this story?",
        textarea:""
    
    },
    {
        id:6,
        question:"What do you this this story could represent or symbolize?",
        textarea:""
    
    },
    {
        id:7,
        question:"What is the point of this story? [Think: /*The reason I'm telling you this is because _____*/] ",
        textarea:""
    },
    // {
    //     id:8,
    //     question:"blank",
    //     textarea:document.getElementById('questionText').value
    // },
    // {
    //     id:9,
    //     question:"blank",
    //     textarea:document.getElementById('questionText').value
    // },
    ]

    const [currentQuestionId, setQuestion] = useState(0);
    const [userInput, setUserInput] = useState([]);
    const [progressPercentage, setWidth] = useState(0)

    const currentQuestion = questions[currentQuestionId];


    const nextQuestion = () =>{
        // setUserInput([currentQuestion.question.value, currentQuestion.textarea.value])
        const nextId = currentQuestionId + 1;
        const newStyle = progressPercentage + 15;



       
        if (nextId >= questions.length){
            nextId = 7;
        }
        setQuestion(nextId)
        setWidth(newStyle)
    }

    const handleInput = (e) =>{
         setUserInput([...userInput, e.target.value])


    }


    // const { handleChange, handleSubmit } = useHandleInput('');



    
  return (
    <div>
        <div className="wrapper">
            <div className="container">
                <div className="questionBoard active"  >
                    <div className="questionContainer" >
                        <input className="questionTitle" type="text"  onChange={handleInput} value={currentQuestion.question}></input>
                        <textarea className="questionText" id="questionText" onChange={handleInput} >{currentQuestion.textarea}</textarea>
                    </div>
                    <div className="barContainer" >
                        <div className="bar" style={{ width: progressPercentage + "%" }} />
                    </div>

                <div className="btnContainer " onClick={nextQuestion}>
                    <button className="nextBtn">Next</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default QuestionBoard;