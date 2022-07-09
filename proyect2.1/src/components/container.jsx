import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import './components.css'
export default function Container({ texto, esBotonDeClick, manejarClick }) {
    return (
    <Box>
        <Button
        fontSize='35px'
        fontFamily='cursive'
        margin='5px'
        height='80px'
        width='250px'
        fontWeight='bold'
        cursor='pointer'
        colorScheme='teal'
        className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
        onClick={manejarClick}
        >
        {texto}
        </Button>
    </Box>
    );
}