import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { UserDataContext } from '../contexts/UserDataContext'
import LoginContainerStyled from '../styling/LoginContainerStyled'

export default function LoginPage() {
    const {getMe, getCustomerList} = useContext(UserDataContext)
    const history = useHistory()
    const [formData, setFormData] = useState({
        email: "Erika.Ahlstrom@yh.nackademin.se",
        password: "javascriptoramverk"
    })

    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api-token-auth/"
        const payload = {
            email: formData.email,
            password: formData.password
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("ea", data.token)
            getMe()
            getCustomerList()
            history.push("/home")
        })
    }

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    return (
        <div>
            <LoginContainerStyled>
            <LoginForm 
                handleOnSubmit={handleOnSubmit}
                handleOnChange={handleOnChange}
                valueEmail={formData.email}
                valuePassword={formData.password}
            />
            </LoginContainerStyled>
        </div>
    )
}
