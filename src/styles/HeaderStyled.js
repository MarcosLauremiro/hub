import styled from 'styled-components';

export const HeaderStyled = styled.header`
    width: 100%;
    height: 12vh;
    
    background-color: var(--color-grey-4);

    border-bottom: 1px solid var(--color-grey-1);

    .header__container{
        width: 100%;
        max-width: calc(1200px - 1rem);

        padding: 0 1rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 100%;
        
        margin: 0 auto;
    }

`