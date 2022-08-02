import React from "react";
import { Box } from '@chakra-ui/react'
import './screen.css'
const Screen = ({ input }) => (
    <Box
    className='input'
    >
    { input }
    </Box>
);
export default Screen;