import { useForm } from 'react-hook-form'
import { Imput } from '../../Components/Inputs'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { formLogin } from './validFormLogin'
import { ParagraphStyled, Title1Styled, Title3Styled } from '../../styles/TypographyStyled'
import { HeaderLoginStyled, SectionLoginStyled } from '../../styles/LoginStyled'
import { ButtonStyledAll } from '../../styles/ButtonStyled'
import { useContext } from 'react'
import { UserContext } from '../../providers/userContext'
import { ToastContainer } from 'react-toastify'

export const Login = () => {

    const {loginUser} = useContext(UserContext)

    const navigate = useNavigate()
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formLogin)
    })

    const submit = (formData) => {
        loginUser(formData)
    }
    
    return(
        <>
        < ToastContainer/>
        <HeaderLoginStyled>
            <Title1Styled color='pink' fontSize='g'>Kenzie Hub</Title1Styled>
        </HeaderLoginStyled>
        <SectionLoginStyled>
            <form onSubmit={handleSubmit(submit)}>    
                <div className='form__container'>
                    <div className='header__form'>
                        <Title3Styled fontSize='m'>login</Title3Styled>
                    </div>

                    <Imput label={'email'} type={'email'} register={register('email')}/>
                    {errors.email ? <p>{errors.email.message}</p> : null}
                    <Imput label={'senha'} type={'password'} register={register('password')}/>
                    {errors.password ? <p>{errors.password.message}</p> : null}
                    <ButtonStyledAll buttonStyle='primy' buttonSize='g'>Entrar</ButtonStyledAll>
                </div>
            </form>
            <div className='footer__login'>
                <ParagraphStyled fontSize='p' color='grey'>Ainda não possui uma conta?</ParagraphStyled>
                <ButtonStyledAll buttonStyle='grey' buttonSize='g' onClick={() => navigate('/register')} >Cadastre-se</ButtonStyledAll>
            </div>
        </SectionLoginStyled>
        </>
    )
}