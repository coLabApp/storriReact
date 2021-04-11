import "./App.css";
import { useState, useEffect, useRef, Fragment } from "react";
// import Main from './Main'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";

function StoryBoard(props) {
  const [currentValue, setCurrentValue] = useState("");
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(true);

  let [storyBoardsCards, setStoryBoardsCards] = useState({
    droppable: [],
    droppable2: [],
    droppable3: [],
    droppable4: [],
    droppable5: []
  });

  let [userData, setUserData] = useState([]);
  let [userData2, setUserData2] = useState([]);
  let [userData3, setUserData3] = useState([]);
  let [userData4, setUserData4] = useState([]);

  const displayCards = () => {
    const currenttoggle = !toggle;
    setToggle(currenttoggle);
  };

  const displayCards1 = () => {
    const currenttoggle = !toggle1;
    setToggle1(currenttoggle);
  };

  const displayCards2 = () => {
    const currenttoggle = !toggle2;
    setToggle2(currenttoggle);
  };

  const displayCards3 = () => {
    const currenttoggle = !toggle3;
    setToggle3(currenttoggle);
  };

  const displayCards4 = () => {
    const currenttoggle = !toggle4;
    setToggle4(currenttoggle);
  };

  useEffect(() => {
    let length = props.userInput.length;
    // readjust users answers array to work the DnD setup
    console.log("UserInput", props.userInput);
    let data = Array.from({ length }, (v, k) => k).map(k => ({
      id: `${k}`,
      //get content
      content: [
        `${props.userInput[k][0]}`,
        `${props.userInput[k][1]}`,
        `${props.userInput[k][2]}`
      ]
    }));
    console.log(props);
    setUserData(data);
    setStoryBoardsCards({
      droppable: data,
      droppable2: [],
      droppable3: [],
      droppable4: [],
      droppable5: data

    });
  }, [props]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };
  let onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    //Same Board
    if (source.droppableId === destination.droppableId) {
      let containerID = source.droppableId;
      console.log(storyBoardsCards[containerID]);
      const data = reorder(
        storyBoardsCards[containerID],
        source.index,
        destination.index
      );
      let currentBoard = storyBoardsCards;
      currentBoard[containerID] = data;
      setStoryBoardsCards(currentBoard);
    }
    //Different Board
    else {
      let sourceData = storyBoardsCards[source.droppableId];
      let desData = storyBoardsCards[destination.droppableId];

      const result = move(sourceData, desData, source, destination);


      let finalBoards = storyBoardsCards;
      finalBoards[source.droppableId] = result[source.droppableId];
      finalBoards[destination.droppableId] = result[destination.droppableId];
      setStoryBoardsCards(finalBoards);
    }
  };

  return (
    <div className="storySection">
      <main>
        <section>
          <div className="sectionContainer">
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="wrapper">
                <h2>
                  NoteBook
                  <button onClick={displayCards}>
                    <i className="fas fa-angle-down"></i>{" "}
                  </button>
                </h2>

                <div className="blue">
                  <div className="wrapper">
                    <div
                      className="saveContainer "
                      id="saveContainer"
                      style={{ display: toggle ? "block" : "none" }}
                    >
                        <Droppable droppableId="droppable5">
                    {provided => (
                      <div className="userAnswer" ref={provided.innerRef}>
                        {storyBoardsCards["droppable5"].map((value, index) => {
                          if (value.content[2] !== "") {
                            // remove || true to hide empty content
                            return (
                              <Card key={index} value={value} index={index} />
                            );
                          }
                        })}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                    </div>
                  </div>
                </div>
                <h2>
                  Blank Cards
                  <button onClick={displayCards1}>
                    <i className="fas fa-angle-down"></i>
                  </button>
                </h2>
                <div
                  className="blankCards storyContainer"
                  style={{ display: toggle1 ? "block" : "none" }}
                >
                  <Droppable droppableId="droppable">
                    {provided => (
                      <div className="  userAnswer" ref={provided.innerRef}>
                        {storyBoardsCards["droppable"].map((value, index) => {
                          if (value.content[2] === "") {
                            // remove || true to hide empty content
                            return (
                              <Card key={index} value={value} index={index} />
                            );
                          }
                        })}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>

                <h2>
                  Beginning
                  <button onClick={displayCards2}>
                    <i className="fas fa-angle-down"></i>
                  </button>
                </h2>
                <div className="storyContainer">
                  <div className="  ">
                    <div
                      className="blankCards  storyBoard " //storyContainer
                      style={{ display: toggle2 ? "block" : "none" }}
                    >
                      <Droppable droppableId="droppable2">
                        {provided => (
                          <div className="userAnswer" ref={provided.innerRef}>
                            {storyBoardsCards["droppable2"].map(
                              (value, index) => {
                                return (
                                  <Card
                                    value={value}
                                    index={index}
                                    key={index}
                                  />
                                );
                              }
                            )}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  </div>
                </div>

                <h2>
                  Middle
                  <button onClick={displayCards3}>
                    <i className="fas fa-angle-down"></i>
                  </button>
                </h2>
                <div className="storyContainer">
                  <div className="  ">
                    <div
                      className="blankCards  storyBoard " //storyContainer
                      style={{ display: toggle3 ? "block" : "none" }}
                    >
                      <Droppable droppableId="droppable3">
                        {provided => (
                          <div className="userAnswer" ref={provided.innerRef}>
                            {storyBoardsCards["droppable3"].map(
                              (value, index) => {
                                return (
                                  <Card
                                    value={value}
                                    index={index}
                                    key={index}
                                  />
                                );
                              }
                            )}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  </div>
                </div>

                <h2>
                  End
                  <button onClick={displayCards4}>
                    <i className="fas fa-angle-down"></i>
                  </button>
                </h2>
                <div className="storyContainer">
                  <div className="  ">
                    <div
                      className="blankCards  storyBoard " //storyContainer
                      style={{ display: toggle4 ? "block" : "none" }}
                    >
                      <Droppable droppableId="droppable4">
                        {provided => (
                          <div className="userAnswer" ref={provided.innerRef}>
                            {storyBoardsCards["droppable4"].map(
                              (value, index) => {
                                return (
                                  <Card
                                    value={value}
                                    index={index}
                                    key={index}
                                  />
                                );
                              }
                            )}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  </div>
                </div>

                {""}
              </div>
            </DragDropContext>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StoryBoard;
