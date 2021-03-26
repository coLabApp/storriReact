import './App.css';
import { useState, useEffect, useRef, Fragment } from 'react';
// import Main from './Main'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function StoryBoard(props) {

  const [currentValue, setCurrentValue] = useState("");


  
  const handleInput = (e) =>{
    setCurrentValue(e.target.value)
}






  return (
    <div className="Storyboard">
      <main>
        <section>
          <div className="sectionContainer">
              <div className="wrapper">
              <div className="storyBoard">
                    <div className="wrapper">
                        <h2>Writer's Room</h2>
                        <div className="saveContainer "id="saveContainer">
                            <div className="userAnswer">{props.userInput.map((uservalue) =>{
                              if(uservalue[0] !== ""){
                                return (
                                <div className="cards"key={uservalue.id}>
                                <input type="text" className="userAnswerInput" value={uservalue[1].value}></input>
                                <textarea type="text" name="echoText" rows="1" cols="20" onChange={handleInput} className="userAnswerTextarea" value={uservalue[0]}></textarea>  
                                </div>
                                )
                              }  
                            })}
                          </div>                      
                        </div>
                    </div>
                </div>
                <div className="storyContainer">
                  <div className="wrapper">
                    <h2>Blank Cards</h2>
                      <div className="blankCards">
                        <div className ="userAnswer">
                          {props.userInput.map((uservalue) =>{
                            if(uservalue[0] === ""){
                              return(
                                <div className="cards"key={uservalue.id}>
                                <input type="text" className="userAnswerInput" value={uservalue[1]}></input>
                                <textarea type="text" className="userAnswerTextarea" name="echoText" rows="1" cols="20" onChange={handleInput}> </textarea>  
                                </div>
                              )
                            }
                          })}
                      </div>
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
            </div>
            
        </section>   
      </main>
    </div>
   
  );
}

export default StoryBoard;
