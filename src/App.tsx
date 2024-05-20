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
    // const onClickHandler = (name:string) => {
    //     console.log(name)
    // }

    const for1 = () => {
        console.log('100200')
    }

    const for2 = (zero: number) => {
        console.log(zero)
    }

    return (
        <div className="App">
            {/*<button onClick={(event: MouseEvent<HTMLButtonElement>)=>onClickHandler('MASK')}>My YouTube Chanel - 1</button>*/}
            {/*<button onClick={(event: MouseEvent<HTMLButtonElement>)=>onClickHandler('ILON')}>My YouTube Chanel - 2</button>*/}

            <button onClick={for1}>number one</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => for2(100200)}>number two</button>
        </div>
    );
}

export default App;
