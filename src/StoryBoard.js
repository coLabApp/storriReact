import './App.css';
import { useState, useEffect, useRef } from 'react';
// import Main from './Main'
// import QuestionBoard from './QuestionBoard'

function StoryBoard() {

  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState('')

  const newStory = () =>{
    const changeDisplay = display + "none";
    setShow(!show)
    if(!show){
      setDisplay(changeDisplay)
    }

  }

  return (
    <div className="StoryBOARD">

      
    </div>
  );
}

export default Storyboard;
