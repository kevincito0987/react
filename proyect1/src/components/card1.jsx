import { Box } from '@chakra-ui/react'
import { Flex} from '@chakra-ui/react'
export default function Games(props) {
    return (
    <>
            <Box
            margin='10px 10px 10px 10px'
            bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
            display='flex'
            boxShadow='0 3px 13px 1px'
        >
            <Flex padding='9px 15px 10px 9px'>
                <Box flex='1'
                    layout='responsive'
                    display='block'
                    backgroundImage={props.imagen}
                    backgroundRepeat='no-repeat'
                    backgroundSize='100% 100%'
                >
                </Box>
                <Box flex='1'
                    padding='5px 5px 9px 15px'
                >
                    <Box
                        fontSize='3xl'
                        color={props.color}
                        fontWeight='400'
                    ><strong><h2>{props.titulo}</h2></strong>
                    </Box>
                    <Box
                        w='100%%'
                        h='10%'
                        layout='responsive'
                        display='block'
                    >
                        <p><><strong>{props.contenido}</strong></p>
                    </Box>
                </Box>
            </Flex>
        </Box></>
            );
}
