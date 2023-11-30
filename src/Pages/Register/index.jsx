import { useState } from 'react'
import { Header } from '../../Components/Header'
import { useForm } from 'react-hook-form'
import { Imput } from '../../Components/Inputs'
import { Select } from '../../Components/Select'
import { formRegister } from '../Register/validForms'
import {zodResolver} from '@hookform/resolvers/zod'
import { api } from '../../services/api'
import { RegisterHeaderStyled, SectionRegister } from '../../styles/RegisterStyled'
import { ParagraphStyled, Title1Styled, Title2Styled } from '../../styles/TypographyStyled'
import { FormStyled } from '../../styles/RegisterStyled'
import { ButtonStyledAll, LinkButton } from '../../styles/ButtonStyled'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    const navigate = useNavigate()

    const RegisterUser = async (formData) => {
        try{
            const {data} = await api.post('/users', formData)
            toast.success('Conta criada com sucesso')
            navigate('/')
        } catch( error ) {
            console.log(error)
            toast.error('Ops! Algo deu errado')
        }
    }

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formRegister)
    })

    const submit = (formData) => {
        RegisterUser(formData)
    }

    return(
        <>
        < ToastContainer/>
        <RegisterHeaderStyled>
            <Title1Styled color='pink' fontSize='g'>Kenzie Hub</Title1Styled>
            <LinkButton buttonSize='g' buttonStyle='grey' to={'/'}>Voltar</LinkButton>
        </RegisterHeaderStyled>
        <SectionRegister>
            <FormStyled onSubmit={handleSubmit(submit)}>
                <div className='form__container'>
                    <div className='header_form'>
                        <Title2Styled fontSize='m'>Crie sua conta</Title2Styled>
                        <ParagraphStyled color='grey' fontSize='m'>Rapido e grátis, vamos nessa</ParagraphStyled>
                    </div>

                    <Imput placeholder={'Digite aqui seu nome'} label={'name'} type={'text'} register={register('name')}/>
                    {errors.name ? <p>{errors.name.message}</p> : null}
                    <Imput placeholder={'Digite aqui seu email'} label={'email'} type={'email'} register={register('email')}/>
                    {errors.email ? <p>{errors.email.message}</p> : null}
                    <Imput placeholder={'Digite aqui sua senha'} label={'Senha'} type={'password'} register={register('password')}/>
                    {errors.password ? <p>{errors.password.message}</p> : null}
                    <Imput placeholder={'Digite novamente sua senha'} label={'Confirmar Senha'} type={'password'} register={register('confirm')}/>
                    {errors.confirm ? <p>{errors.confirm.message}</p> : null}
                    <Imput placeholder={'Fale sobre você'} label={'bio'} type={'text'} register={register('bio')}/>
                    {errors.bio ? <p>{errors.bio.message}</p> : null}
                    <Imput placeholder={'Opção de contato'} label={'Contato'} type={'text'} register={register('contact')}/>
                    {errors.contact ? <p>{errors.contact.message}</p> : null}
                    <Select label={'Selecionar módulo'} register={register('course_module')}/>
                    <ButtonStyledAll buttonSize='g' buttonStyle='deful' type='submit'>Cadastrar</ButtonStyledAll>
                </div>
            </FormStyled>
        </SectionRegister >
        </>
    )
}