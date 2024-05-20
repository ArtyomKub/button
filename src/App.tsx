import React from 'react';
import './App.css';
import {Button} from './components/Button';

// function App() {
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
// const for1 = () => {
//     console.log(100200)
// }
//
// const for2 = (zero: number) => {
//     console.log(zero)
// }
//
//     return (
//         <div className="App">
//             {/*<button onClick={(event: MouseEvent<HTMLButtonElement>)=>onClickHandler('MASK')}>My YouTube Chanel - 1</button>*/}
//             {/*<button onClick={(event: MouseEvent<HTMLButtonElement>)=>onClickHandler('ILON')}>My YouTube Chanel - 2</button>*/}
//
//             <button onClick={for1}>number one</button>
//             <button onClick={(event: MouseEvent<HTMLButtonElement>) => for2(100200)}>number two</button>
//         </div>
//     );
// }

function App() {

    const Button1For = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button2For = (subscriber: string) => {
        console.log(subscriber)
    }

    return (
        <div className={'App'}>
            <Button name={'Chanel one'} callBack={() => Button1For('Batman')}/>
            <Button name={'Chanel two'} callBack={() => Button2For('Cross')}/>
        </div>
    )
}


export default App;