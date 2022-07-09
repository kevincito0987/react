import React from "react";
import { Box } from '@chakra-ui/react'
export default function Contador({ numClicks }) {
    return(
        <Box
        minWidth='300px'
        height='300px'
        fontSize='160px'
        padding='25px'
        color='white'
        display='flex'
        border='8px solid white'
        marginBottom='15px'
        alignItems='center'
        justifyContent='center'
        margin='40px 40px 40px 40px'
        >
        {numClicks}
        </Box>
    );
}