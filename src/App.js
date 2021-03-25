import './App.css';
import Header from './Header';
import { useState, useEffect, useRef } from 'react';
// import Main from './Main'
import QuestionBoard from './QuestionBoard'

function App() {

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
    <div className="App">
      <Header />
      {
        show?<QuestionBoard />:null
      }
      <button style={{display: display}} onClick={newStory}>New story</button>

      
    </div>
  );
}

export default App;
