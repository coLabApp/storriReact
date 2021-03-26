import './App.css';
import { useState, useEffect, useRef, Fragment } from 'react';
// import Main from './Main'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function StoryBoard(props) {

const [currentValue, setCurrentValue] = useState("");
const [toggle, setToggle] = useState("");

const displayCards =  () =>{
    const changeToggle = toggle + "none";
    setToggle(changeToggle)
  
}


  
const handleInput = (e) =>{
    setCurrentValue(e.target.value)
}

  return (
    <div className="storySection">
      <main>
        <section>
          <div className="sectionContainer">
              <div className="wrapper">
              <h2>Writer's Room <button onClick={displayCards}> <i class="fas fa-angle-down"></i> </button></h2>
              <div className="blue" style={{display: toggle}}>
                    <div className="wrapper">
                        <div className="saveContainer "id="saveContainer">
                            <div className="userAnswer">{props.userInput.map((uservalue) =>{
                              if(uservalue[0] !== ""){
                                return (
                                <div className="cards"key={uservalue.id}>
                                <h4>{uservalue[1]}</h4>
                                <input type="text" className="userAnswerInput" value={uservalue[2]}></input>
                                <textarea type="text" name="echoText" rows="1" cols="20" onChange={handleInput} className="userAnswerTextarea" value={uservalue[0]}></textarea>  
                                </div>
                                )
                              }  
                            })}
                          </div>                      
                        </div>
                    </div>
                </div>
                <h2>Blank Cards <button onClick={displayCards} > <i class="fas fa-angle-down"></i></button></h2>
                <div className="storyContainer">
                  <div className="wrapper">
                      <div className="blankCards">
                        <div className ="userAnswer">
                          {props.userInput.map((uservalue) =>{
                            if(uservalue[0] === ""){
                              return(
                                <div className="cards"key={uservalue.id}>
                                <h4>{uservalue[1]}</h4>
                                <input type="text" className="userAnswerInput" ></input>
                                <textarea type="text" className="userAnswerTextarea" name="echoText" rows="1" cols="20" onChange={handleInput}> </textarea>  
                                </div>
                              )
                            }
                          })}
                      </div>
                    </div>
                  </div>
                </div>
                <h2>Beginning <button  onClick={displayCards}> <i class="fas fa-angle-down"></i> </button></h2>
                <div className="storyContainer" >
              <div className="wrapper">

                  <div className="storyBoard">
                  </div>
              </div>
            </div>
            <h2>Middle <button onClick={displayCards}> <i class="fas fa-angle-down"></i> </button></h2>
            <div className="storyContainer"  >
                <div className="wrapper">
                    <div className="storyBoard">                             
                    </div>
                </div>
            </div>
                <h2>End <button onClick={displayCards}> <i class="fas fa-angle-down"></i> </button></h2>
                  <div className="storyContainer"  >
                      <div className="wrapper">
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
