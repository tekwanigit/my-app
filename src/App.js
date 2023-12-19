import { useState } from 'react';
import Ram from './Ram';
import Abc from './Abc';
import ExampleClassComponent from './Example_class_component';

function App() {
  let [counter, setCounter] = useState(15);
  function increaseCounter(){
    setCounter( counter+1 );
    // setCounter( prevState => prevState + 1 );
    // setCounter( prevState => prevState + 1 );
    // setCounter( prevState => prevState + 1 );
    // console.log(counter);
  }

  function decreaseCounter(){
    setCounter(--counter);
    console.log(counter);
  }
  return (
    <>
      <Ram />
      <ExampleClassComponent annocemet="waiting for 22 January" />
      <Abc name="Xyz" />
      <h1>{counter}</h1>
      <button onClick= {increaseCounter}>Increase Counter</button>
      <button style={{"margin-left": "5px"}} onClick= {decreaseCounter}>Decrease Counter</button>
    </>
  );
}

export default App;
