import styled from 'styled-components';

export const ModalControler = styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;

    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.3);

    font-family: var(--font-primary);

    .modal__container{
        position: relative;
        width: 100%;

        max-width: 400px;

        background: var(--color-grey-3);

        .header__modal{
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 100%;
            
            padding:.5rem 1rem;

            background-color: var(--color-grey-2);
        }

        form{
            display: flex;
            flex-direction: column;

            gap: 1rem;

            padding: 1rem;

            label{
                color: white;
            }

            input{
                color: var(--color-grey-1);
            }
            select{
                
            }
            .buttons_edit{
                display: flex;
                flex-direction: row;

                justify-content: space-between;
            }
        }
    }


`