import styled from 'styled-components';

export const HeaderLoginStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    margin:2rem 0;
    
`

export const SectionLoginStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 1.5rem;

    font-family: var(--font-primary);

    max-width: 1200px;
    width: 100%;

    margin: 0 auto;

    form{
        .form__container{
        width: clamp(200px, 360px, 400px);

        display: flex;
        flex-direction: column;
        gap: 1rem;

        background: var(--color-grey-3);

        padding: 2rem;

        border-radius:4px 4px 0 0;
        .header__form{
            background: var(--color-grey-3);

            display: flex;
            align-items: center;
            justify-content: center;
        }

        fieldset{
            display: flex;
            flex-direction: column;


            border: none;

            label{
                color: var(--color-grey-0);
            }
            input{
                color: var(--color-grey-1);
            }
        }
    }
    }

    .footer__login{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 2rem;

        width: clamp(200px, 360px, 400px);

        background: var(--color-grey-3);

        padding:0 2rem 2rem 2rem;

        border-radius: 0 0 4px 4px;

        button{
            width: 100%;
        }
    }
`