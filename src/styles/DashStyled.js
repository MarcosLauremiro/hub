import styled from 'styled-components';

export const NavStyled = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1200px;
    height: 12vh;

    padding: 1.5rem;
    margin: 0 auto;

    border-bottom: 1px solid var(--color-grey-1);
`

export const HeaderDashStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    width: 100%;
    max-width: 1200px;
    height: 14vh;

    padding: 1.5rem;
    margin: 0 auto;

    border-bottom: 1px solid var(--color-grey-1);

    
`

export const mainDashStyled =  styled.main`
    width: 100%;
`

export const SectionStyled = styled.section`
    width: 100%;
    max-width: 1200px;

    display: flex;
    align-items: center;
    flex-direction: column;
    
    padding: 1.5rem;
    margin: 0 auto;
    .user{
        border-bottom: 1px solid var(--color-grey-1);
        
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding:2rem 0;
    }
    .cards__container{
        width: 100%;
        max-width: calc(1200px - 1rem);

        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        gap: 1.2rem;

        padding:2rem 0;
    }
`

export const HeaderTechsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    width: 100%;

    margin-bottom: 1.5rem;
`

export const ContentTechsStyled = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    background-color: var(--color-grey-2);

    padding: 1rem;

    border-radius: 4px;
`

export const TechsCardStyled = styled.li`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

    background-color: var(--color-grey-4);

    border-radius: 4px;

    padding: 1rem;

    cursor: pointer;
    &:hover{
        background-color: var(--color-grey-1);

        transition: all.4s;
    }
`