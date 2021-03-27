import './App.css';
import { useState, useEffect, useRef, Fragment } from 'react';
// import Main from './Main'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function StoryBoard(props) {

const [currentValue, setCurrentValue] = useState("");
const [toggle, setToggle] = useState(true);
const [toggle1, setToggle1] = useState(true);
const [toggle2, setToggle2] = useState(true);
const [toggle3, setToggle3] = useState(true);
const [toggle4, setToggle4] = useState(true);
const [toggle5, setToggle5] = useState(true);
const [response, setResponse] = useState(""); 
const [dragging, updateDragging] = useState(props)

const displayCards =  () =>{
  const currenttoggle = !toggle
    setToggle(currenttoggle)
  
}

const displayCards1 =  () =>{
  const currenttoggle = !toggle1
    setToggle1(currenttoggle)
  
}

const displayCards2 =  () =>{
  const currenttoggle = !toggle2
    setToggle2(currenttoggle)
  
}

const displayCards3 =  () =>{
  const currenttoggle = !toggle3
    setToggle3(currenttoggle)
  
}

const displayCards4 =  () =>{
  const currenttoggle = !toggle4
    setToggle4(currenttoggle)
  
}

const displayCards5 =  () =>{
  const currenttoggle = !toggle5
    setToggle5(currenttoggle)
  
}
  
const handleInput = (e) =>{
    setCurrentValue(e.target.value)
}

useEffect(() => {
  updateDragging(props);
}, [props]);


function handleOnDragEnd(result) {
  if (!result.destination) return;

  const items = Array.from(props.userInput);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);

  updateDragging(items);
}



  return (
    <div className="storySection">
      <main>
        <section>
          <div className="sectionContainer">
            
              <div className="wrapper">
              <h2>NoteBook<button onClick={displayCards1}>  <i class="fas fa-angle-down"></i> </button></h2>
              <div className="blue" >
                    <div className="wrapper">
                        <div className="saveContainer "id="saveContainer" style={{display: toggle1 ? 'block' : 'none' }}>
                            <div className="userAnswer">{props.userInput.map((uservalue) =>{
                              if(uservalue[0] !== ""){
                                return (
                                <div className="cards" draggable="true"  key={uservalue.id}>
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
                      <div className="blankCards" style={{display: toggle ? 'block' : 'none' }}>
                        <div className ="userAnswer">
                          {props.userInput.map((uservalue) =>{
                            if(uservalue[0] === ""){
                              return(
                                <div className="cards" draggable="true" key={uservalue.id}>
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
                <h2>Beginning <button onClick={displayCards2}  > <i class="fas fa-angle-down"></i> </button></h2>
                <div className="storyContainer" style={{display: toggle2 ? 'block' : 'none' }}> 
              <div className="wrapper">

                  <div className="storyBoard">
                  </div>
              </div>
            </div>
            <h2>Middle <button onClick={displayCards3} > <i class="fas fa-angle-down"></i> </button></h2>
            <div className="storyContainer" style={{display: toggle3 ? 'block' : 'none' }}> 
                <div className="wrapper">
                    <div className="storyBoard">                             
                    </div>
                </div>
            </div>
                <h2>End <button onClick={displayCards4} > <i class="fas fa-angle-down"></i> </button></h2>
                  <div className="storyContainer" style={{display: toggle4 ? 'block' : 'none' }}>
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
