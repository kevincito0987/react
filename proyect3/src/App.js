import './App.css';
import { Box } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
      <Box
      width='100%'
      height='100%'
      margin='8px 0px 8px 0px'
      display='flex'
      alignItems= 'center'
      justifyContent= 'center'
      >
      <Box
      fontSize='3rem'
      color='aquamarine'
      >
        <h1>interactive Calculator.</h1>
      </Box>
      </Box>
    </div>
  );
}

export default App;
