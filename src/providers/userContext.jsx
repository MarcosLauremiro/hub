import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const UserContext = createContext({})

export const UseProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    const currentPath = window.location.pathname;

    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        setUserData(null)
        navigate('/')
    }

    const token = localStorage.getItem('@TOKENUSER')
    const idUser = localStorage.getItem('@USERID')
    useEffect(() => { 
        const user = async () => {
            try {
                const { data } = await api.get(`/users/${idUser}`)
                setUserData(data) 
                navigate(currentPath)
            } catch (error) {
                console.log(error)
            }
        }
        if(token && idUser){
            user()
        }
    },[])

    const loginUser = async (formData) => {
        try{
            const {data} = await api.post('/sessions', formData)
            localStorage.setItem('@TOKENUSER', data.token)
            localStorage.setItem('@USERID', data.user.id)
            toast.success('Login realizado com sucesso')
            setUserData(data.user)
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
            toast.error('Senha ou email incorretos')
        }
    }

    return (
        <UserContext.Provider value={{logout, userData, loginUser}}>
            {children}
        </UserContext.Provider>
    )
}