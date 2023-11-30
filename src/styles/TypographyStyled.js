import styled, { css } from 'styled-components';

export const TitleStyles = css`
    font-family: var(--font-primary);
    font-style: normal;
    line-height: 1.5;
    font-weight: 700;

    ${({color}) => {
        switch (color) {
            case 'pink':
                return css`
                    color: var(--color-color-primary);
                `
            case 'grey':
                return css`
                    color: var(--color-grey-1);
                `
            default:
                return css`
                    color: var(--color-grey-0);
                `
        }
    }}

    ${({fontSize}) => {
        switch(fontSize){
            case 'g':
                return css`
                    font-size: 18px;
                `
            case 'm':
                return css`
                    font-size: 16px;
                `
            case 'p':
                return css`
                    font-size: 14px;
                `
        }
    }}
`

export const Title1Styled = styled.h1`
    ${TitleStyles}
`

export const Title2Styled = styled.h2`
    ${TitleStyles}
`

export const Title3Styled = styled.h3`
    ${TitleStyles}
`

export const ParagraphStyled = styled.p`
    font-family: var(--font-primary);
    font-weight: 400;
    font-style: normal;
    line-height: 1.5;

    ${({fontSize}) => {
        switch(fontSize){
            case 'p':
                return css`
                    font-size: 12px;
                `
            case 'm':
                return css`
                    font-size: 14px;
                `
            default:
                return css`
                    font-size: 16px;
                `
        }
    }}

    ${({color}) => {
        switch(color){
            case 'grey':
                return css`
                    color: var(--color-grey-1);
                `
            default:
                return css`
                    color: var(--color-grey-0);
                `
        }
    }}
`