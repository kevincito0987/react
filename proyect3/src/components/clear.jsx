import React from "react";
import { Box } from '@chakra-ui/react'
import './clear.css'
const Clear = (props) => (
    <Box
    className='clear'
    onClick={props.manejarClear}
    >
    {props.children}
    </Box>
);
export default Clear;