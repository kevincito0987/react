import './App.css';
import Container from './components/container.jsx';
import { Box } from '@chakra-ui/react'
import Contador from './components/counter';
import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
function App() {
  const [ numClicks, setNumClicks ] = useState(0);
  const clicks = () => {
    setNumClicks( numClicks + 1 );
  };
  const rest = () => {
  setNumClicks(0);
  };
  return (
    <div className="App">
    <main>
    <Box fontSize='3rem' color='azure'>
        <h1>Clicks Counter.</h1>
    </Box>
    <Box className='main-container'>
    <Contador
      numClicks={numClicks}
    />
    <Flex
    alignItems='center'
    justifyContent='center'
    >
    <Box p='4'>
    <Container
        texto='Clicks.'
        esBotonDeClick={true}
        manejarClick={clicks}
      />
    </Box>
    <Box p='4'>
    <Container
        texto='Restart.'
        esBotonDeClick={false}
        manejarClick={rest}
      />
  </Box>
</Flex>
    </Box>
    </main>
    </div>
  );
}
export default App;
