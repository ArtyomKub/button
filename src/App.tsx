import React from 'react';
import './App.css';

function App() {
    const MyFirstSubscriber = () => {
        console.log('Hi, I am Artsem')
    }

    const MySecondSubscriber = () => {
        console.log('Hi, I am Batman')
    }

    return (
        <div className="App">
            <button onClick={MyFirstSubscriber}>My YouTube Chanel - 1</button>
            <button onClick={MySecondSubscriber}>My YouTube Chanel - 2</button>
        </div>
    );
}

export default App;
