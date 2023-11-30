import styled, { createGlobalStyle } from 'styled-components';

export const ResetStyled = createGlobalStyle`
    *{
        box-sizing: border-box;
        text-decoration: none;
        line-height: 150%;

        margin: 0;
        padding: 0;
    }
    ul, ol, li{
        list-style: none;
    }
    a{
        text-decoration: none;
        outline: none;
        cursor: pointer;
    }
    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
    }
    input, select, textarea{
        border: none;
        background-color: transparent;
    }
    fieldset{
        border: none;
    }
`