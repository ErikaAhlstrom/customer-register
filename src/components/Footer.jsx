import React, {useContext, useEffect} from 'react'
import { UserDataContext } from '../contexts/UserDataContext'
import FooterStyled from '../styling/FooterStyled'

export default function Footer() {
    const {user, getMe} = useContext(UserDataContext) 
        useEffect(() => {
        if (!user) {
            getMe()
            console.log("Anropar från Footer!")
        }
        
    }, [])
    return (
            <FooterStyled>
                {user && <p>{user.email}</p>}
            </FooterStyled>
    )
}
