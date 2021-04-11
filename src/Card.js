import "./App.css";
import { useState, useEffect, useRef, Fragment } from "react";
// import Main from './Main'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Card = ({ value, index }) => {
  const [currentValues, setCurrentValues] = useState({
    subject: value.content[2],
    content: value.content[0]
  });

  const handleInput = e => {
    setCurrentValues({ ...currentValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {}, []);

  return (
    <Draggable key={value.id} draggableId={value.id} index={index}>
      {provided => (
        <div
          className="cards"
          // draggable="true"
          key={value.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4>{value.content[1]}</h4>
          <input
            type="text"
            className="userAnswerInput"
            value={currentValues.subject}
            onChange={handleInput}
            name="subject"
          ></input>
          <textarea
            type="text"
            className="userAnswerTextarea"
            name="echoText"
            rows="1"
            cols="20"
            name="content"
            onChange={handleInput}
            value={currentValues.content}
          ></textarea>
        </div>
      )}
    </Draggable>
  );
};

export default Card;