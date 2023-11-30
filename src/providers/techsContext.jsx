import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../services/api';
import { UserContext } from './userContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { formRegister } from '../Pages/Register/validForms';
import { formAddTech } from '../Components/ModalAddTech/validForm';

export const TechsContext = createContext({})

export const TechsProvider = ({children}) => {

    const {userData} = useContext(UserContext)

    const userTechs = userData.techs

    const [listTechs, setListTechs] = useState(userTechs)
    const [stateModal, setStateModal] = useState(false)
    const [cardTech, setCardTech] = useState({})
    const [modalEdit, setModalEdit] = useState(false)

    const token = localStorage.getItem('@TOKENUSER')

    const openModal = () => {
        setStateModal(true)
    }

    const closeModal = () => {
        setStateModal(false)
    }

    const createTech = async (formData) => {
        try {
            const {data} = await api.post('/users/techs', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setListTechs([...listTechs, data])
            setStateModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formAddTech)
    })

    const submit = (formData) => {
        createTech(formData)
    }

    const modalRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const actionClick = (e) => {
            if(!modalRef.current?.contains(e.target)){
                setStateModal(false)
            }
        }

        window.addEventListener('mousedown', actionClick)
        
        return() => {
            window.removeEventListener('mousedown', actionClick)
        }
    },[])

    useEffect(() => {
        const downButton = (e) => {
            if(e.key === 'Escape'){
               buttonRef.current?.click() 
            }
        }

        window.addEventListener('keydown', downButton)

        return () => {
            window.removeEventListener('keydown', downButton)
        }
    },[])

    const editTech = async (formData,techId) => {
        try {
            const {data} = await api.put(`/users/techs/${techId}` ,formData,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setListTechs(listTechs.map((tech) => {
                if (tech.id === techId) {
                    return data;
                } else {
                    return tech;
                }
            }));
            setModalEdit(false)
        } catch (error) {
            console.log(error)
        }
    }

    const openModalEdit = (tech) => {
        setCardTech(tech)
        setModalEdit(true)
    }

    const closeModalEdit = () => {
        setModalEdit(false)
    }

    const deletTech = async (techId) => {
        try {
            const {data} = await api.delete(`/users/techs/${techId}`, { 
                headers: {
                    Authorization: `Bearer ${token}`
                }

            })
            setListTechs(listTechs.filter((tech) => {
                return tech.id != techId 
            }))
            setModalEdit(false)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <TechsContext.Provider value={{errors, deletTech, listTechs, setListTechs, stateModal, openModal, closeModal, submit, handleSubmit, register, setStateModal, modalRef, buttonRef, modalEdit, closeModalEdit, openModalEdit, editTech, setCardTech, cardTech}}>
            {children}
        </TechsContext.Provider>
    )
}