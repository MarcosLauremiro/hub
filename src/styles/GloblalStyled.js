import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    :root {
        --color-color-primary: #ff577f;
        --color-color-primary-50: #ff427f;
        --color-color-primary-disable: #59323f;
        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343b41;
        --color-grey-1: #868e96;
        --color-grey-0: #f8f9fa;
        --color-sucess: #3fe864;
        --color-negative: #e83f5b;

        --font-primary: 'Inter', sans-serif;;
    }
    body{
        background: var(--color-grey-4);
    }
`