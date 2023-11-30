import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ButtonStyled = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 700;

    border-radius: 4px;

    transition: .5s;

    ${({buttonSize}) => {
        switch (buttonSize) {
            case 'g':
                return css`
                    padding: 0 1.375rem;
                    height: clamp(38px, 40px, 48px);
                `
            case 'm':
                return css`
                    padding: 0 1rem;
                    height: 2rem;
                `  
        }
    }}
    ${({buttonStyle}) => {
        switch(buttonStyle){
            case 'primy':
                return css`
                    background: var(--color-color-primary);
                    color: var(--color-grey-0);

                    &:hover{
                        background: var(--color-color-primary-50);
                    }
                `
            case 'deful':
                return css`
                    background: var(--color-color-primary-disable);
                    color: var(--color-grey-0);
                `
            case 'grey':
                return css`
                    background: var(--color-grey-2);
                    color: var(--color-grey-0);

                    &:hover{
                        background: var(--color-grey-1);
                        color: var(--color-grey-0);
                    }
                `
        }
    }}
`

export const ButtonStyledAll = styled.button`
    ${ButtonStyled}
`

export const LinkButton = styled(Link)` 
    ${ButtonStyled}
`
