import React from "react";
import { Box } from '@chakra-ui/react';
import './boton.css';
export default function Boton(props) {
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
    return (
        <Box
        className={`boton-container ${esOperador(props.children) ? 'operator' : '' }`.trimEnd()}
        cursor='pointer'
        onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </Box>
    );
}