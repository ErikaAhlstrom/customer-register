import React, {useEffect, useContext} from 'react'
import CustomerListItem from '../components/CustomerListItem'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { UserDataContext } from '../contexts/UserDataContext'
import HomeContainerStyled from '../styling/HomeContainerStyled'
import ListContainerStyled from '../styling/ListContainerStyled'

export default function HomePage() {    
    const {customerList, user, getCustomerList, getMe} = useContext(UserDataContext)
  

    useEffect(() => {
        if (!customerList) {
            getCustomerList()
        }

        if(!user) {
            getMe()
        }
        
    }, [])

    function renderWhenLoading() {
        return <p>Loading...</p>
    }

    function renderWhenLoaded(){
        return (
            <>
                {customerList.map(item => {
                    return(
                        <CustomerListItem key={item.id} customerData={item}/>
                    )
                })
                }
            </>
        )
    }

    return (
        <HomeContainerStyled>
            <Header />
            <ListContainerStyled>
            {(customerList && user)
            ?
            renderWhenLoaded()
            :
            renderWhenLoading()
            }   
            </ListContainerStyled>
            <Footer />
        </HomeContainerStyled>
    )
}
