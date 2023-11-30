import styled from 'styled-components';

export const RegisterHeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 12vh;
    width: 100%;
    max-width: clamp(180px, 360px, 400px);

    padding: 1rem;

    margin: 0 auto;
`

export const SectionRegister = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 1.5rem 0;

    font-family: var(--font-primary);

    @media(max-width: 340px) {
        .header_form{
            width: 100%;
        }
        form{
            width: 100%;
        }
    }
`

export const FormStyled = styled.form`
    .form__container{
        width: clamp(180px, 360px, 400px);

        display: flex;
        flex-direction: column;
        gap: 1rem;

        background: var(--color-grey-3);

        padding: 2rem;

        border-radius:4px;
        .header_form{
            background-color: var(--color-grey-3);

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            padding: 1.5rem;

            border-radius:4px 4px 0 0;
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
`