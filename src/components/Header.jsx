import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../contexts/UserDataContext'
import HeaderStyled from '../styling/HeaderSyled'
import NavbarStyled from '../styling/NavbarStyled'
export default function Header() {

    const {user, getMe} = useContext(UserDataContext) 

        useEffect(() => {
        if (!user) {
            getMe()
        }
        
    }, [])

    return (
        <HeaderStyled>
            <div>
                {user && <span> Hello {user.firstName} {user.lastName}</span>}
            </div>

            <NavbarStyled>
                <Link to="/home">HOME</Link>
                <Link to="/home">CUSTOMERS</Link>
                <Link to="/customers/create">NEW CUSTOMER</Link>
            </NavbarStyled>
        </HeaderStyled>
    )
}
