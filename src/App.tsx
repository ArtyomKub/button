import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <button onClick={(event) => {
                console.log('Working')
            }}>My YouTube Chanel - 1
            </button>
            <button onClick={(event) => {
                console.log('Fuck')
            }}>My YouTube Chanel - 2
            </button>

        </div>
    );
}

export default App;
