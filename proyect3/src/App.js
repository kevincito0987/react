import './App.css';
import { Box } from '@chakra-ui/react'
import Boton from './components/boton';
import Screen from './components/screen';
import Clear from './components/clear';
import { useState } from 'react'
import { evaluate } from 'mathjs'
function App() {

  const [input, setInput] = useState('');
  const agregarInput = value => {
  setInput(input + value);
  };
  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input));
    }
    else{
      alert("Please, enter values to do the calculations.");
      //Reto de como hacer para que no se muestre mas de un operador seguido en la pantalla sino mostrar el ultimo.
      //Challenge of how to do that don't show more than one operator followed on the screen otherwise show the ultimate.
    }
  }
  return (
    <div className="App">
      <Box className='title'>
      <h1>Interactive Calculator.</h1>
      </Box>
      <Box
      className='container-calculator'
      >
      <Screen  input={input}/>
      <Box className='file'>
      <Boton manejarClick={agregarInput}>1</Boton>
      <Boton manejarClick={agregarInput}>2</Boton>
      <Boton manejarClick={agregarInput}>3</Boton>
      <Boton manejarClick={agregarInput}>+</Boton>
      </Box>
      <Box className='file'>
      <Boton manejarClick={agregarInput}>4</Boton>
      <Boton manejarClick={agregarInput}>5</Boton>
      <Boton manejarClick={agregarInput}>6</Boton>
      <Boton manejarClick={agregarInput}>-</Boton>
      </Box>
      <Box className='file'>
      <Boton manejarClick={agregarInput}>7</Boton>
      <Boton manejarClick={agregarInput}>8</Boton>
      <Boton manejarClick={agregarInput}>9</Boton>
      <Boton manejarClick={agregarInput}>*</Boton>
      </Box>
      <Box className='file'>
      <Boton manejarClick={calcularResultado}>=</Boton>
      <Boton manejarClick={agregarInput}>0</Boton>
      <Boton manejarClick={agregarInput}>.</Boton>
      <Boton manejarClick={agregarInput}>/</Boton>
      </Box>
      <Box className='file'>
        <Clear manejarClear={() => setInput('')}>Clear.</Clear>
      </Box>
      </Box>
    </div>
  );
}

export default App;