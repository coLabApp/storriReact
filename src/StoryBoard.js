import './App.css';
import { useState, useEffect, useRef } from 'react';
// import Main from './Main'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function StoryBoard(props) {


  return (
    <div className="Storyboard">
       <main>
          <section>
              <div className="sectionContainer">
                {(() =>{
                  if(props.userInput[1] !== ""){
                    <div className="storyBoard">
                    <div className="wrapper">
                        <h2>Writer's Room</h2>
                        <div className="saveContainer "id="saveContainer">
                            <div className="userAnswer">{props.userInput.map((uservalue, i) =>{
                                return (
                                    <div key={i}>
                                <div key={uservalue.id}>
                                <input value={uservalue[0]}></input>
                                <textarea value={uservalue[1]}></textarea>  
                                </div>
                                </div>

                                )
                                
                            })}
                                </div>                      
                        </div>
                    </div>
                </div>

                  } else {
                    <div className="storyContainer">
                    <div className="wrapper">
                        <h2>Blank Cards</h2>
                        <div className="blankCards" id="blankCards">
                            <div className="userAnswer">{props.userInput.map((item,i) =>{
                                return(
                                    <div className="wrapper" key={i}>
                                <div key={item.id}>
                                    <input type="text" value={item[0]}></input>
                                    <textarea></textarea>
                                </div>
                                </div>

                                )
                                
                            })}</div>                           
                        </div>
                    </div>
                </div> 
                  }
                })}
                  

                  
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
  );
}

export default StoryBoard;
