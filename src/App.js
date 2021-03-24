import './App.css';
import Header from './Header';
import { useState, useEffect, useRef } from 'react';
// import Main from './Main'
import QuestionBoard from './QuestionBoard'

function App() {
  const [question, setQuestion] = useState(
    [{
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
  }
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
  )

  return (
    <div className="App">
      <Header />
      <QuestionBoard />
    </div>
  );
}

export default App;
