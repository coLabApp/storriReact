import { useState, useEffect, useRef } from 'react';
import './App.css';
import useHandleInput from './useHandleInput'

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
        const newStyle = progressPercentage + 15;
        const display = toggleState + "none"
        const show = showContainer + "grid"
        if(userInput[1] !== ""){
            setResponse([...response, questions[currentQuestionId]])  
        } 
       
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
                        <input className="questionTitle" type="text"  onChange={handleInput} value={currentQuestion.question}></input>
                        <textarea className="questionText" id="questionText" onChange={handleInput} value={currentValue} ></textarea>
                    </div>
                    <div className="barContainer" >
                        <div className="bar" style={{ width: progressPercentage + "%" }} />
                    </div>

                <div className="btnContainer " onClick={nextQuestion}>
                    <button className="nextBtn">Next</button>
                </div>
            </div>

        </div>
        <div className="mainSection"style={{display: showContainer}}>
        <main>
        <section>
            <div className="sectionContainer">
                <div className="storyBoard">
                    <div className="wrapper">
                        <h2>Writer's Room</h2>
                        <div className="saveContainer "id="saveContainer">
                            <div className="userAnswer">{userInput.map((uservalue, i) =>{ 
                                <div key={i}>
                                <div key={uservalue.id}>
                                    <h2>Hello</h2>
                                <input value={uservalue[0]}></input>
                                <textarea value={uservalue[1]}></textarea>  
                                </div>
                                </div>
                            })}
                                </div>                      
                        </div>
                    </div>
                </div>
                <div className="storyContainer">
                    <div className="wrapper">
                        <h2>Blank Cards</h2>
                        <div className="blankCards" id="blankCards">
                            <div className="userAnswer">{response.map((item,i) =>{
                                <div className="wrapper" key={i}>
                                <div key={item.id}>
                                    <input type="text" value={item}></input>
                                    <textarea></textarea>
                                </div>
                                </div>
                            })}</div>                           
                        </div>
                    </div>
                </div>
        
                <div className="storyContainer">
                    <div className="wrapper">
                        <h2>Beginning</h2>
                        <div className="storyBoard">

                        </div>
                    </div>
                </div>
        
                <div className="storyContainer">
                    <div className="wrapper">
                        <h2>Middle</h2>
                        <div className="storyBoard">
                            
                        </div>
                    </div>
                </div>
        
                <div className="storyContainer">
                    <div className="wrapper">
                        <h2>End</h2>
                        <div className="storyBoard">
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    </main>
    </div>
        </div>
    </div>
  )
}

export default QuestionBoard;