import './App.css';

function Main() {
  return (
    <div className="mainSection">
        <main>
        <section>
            <div className="sectionContainer">
                <div className="storyBoard">
                    <div className="wrapper">
                        <h2>Writer's Room</h2>
                        <div className="saveContainer "id="saveContainer">
                                
                        </div>
                    </div>
                </div>
                <div className="storyContainer">
                    <div className="wrapper">
                        <h2>Blank Cards</h2>
                        <div className="blankCards" id="blankCards">
                            
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
    );
}

export default Main;
