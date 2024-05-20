import React, {MouseEvent} from 'react';
import './App.css';

function App() {
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hi, I am Artsem')
    // }
    //
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hi, I am Batman')
    // }

    const onClickHandler = (name:string) => {
        console.log(name)
    }

    return (
        <div className="App">
            <button onClick={()=>{onClickHandler('Mask')}}>My YouTube Chanel - 1</button>
            <button onClick={()=>{onClickHandler('Ilon')}}>My YouTube Chanel - 2</button>
        </div>
    );
}

export default App;
