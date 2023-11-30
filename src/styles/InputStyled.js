import styled from 'styled-components';

export const InputStyled = styled.input`
    width: 100%;
    height: clamp(38px, 40px, 48px);

    background-color: var(--color-grey-2);

    padding: 1rem;

    border-radius: 4px;

    ::placeholder{
        color: var(--color-grey-1);
    }
`

export const SelectStyle = styled.select`
    width: 100%;
    height: clamp(38px, 40px, 48px);

    background-color: var(--color-grey-2);

    border-radius: 4px;

    color: var(--color-grey-1);

    padding: 0 1rem;
`