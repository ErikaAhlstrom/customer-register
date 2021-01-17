import React, {useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { UserDataContext } from '../contexts/UserDataContext'
import {ButtonStyled} from '../styling/ButtonStyled'
import FormCustomerStyled from '../styling/FormCustomerStyled'
import InputCustomerStyled from '../styling/InputCustomerStyled'

export default function UpdateCustomerPage(props) {
    const {customerData, setCustomerData} = useContext(UserDataContext)
    const customerId = props.match.params.id
    const history = useHistory()

    function renderInput(name, label, type) {
        return (
            <>
                <label>{label}</label>
                <InputCustomerStyled 
                    name={name}
                    type={type}
                    value={customerData[name || ""]}
                    onChange={handleOnChange}
                    id={name}
                />
            </>
        )
    }

    function handleOnChange(e) {
        setCustomerData({...customerData, [e.target.name]: e.target.value})
    }

    function getCustomerData(){
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
        const token = localStorage.getItem("ea")
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setCustomerData(data))
    } 

        useEffect(() => {
        getCustomerData()
    }, []) 

    function handleOnSubmit(e) {
        e.preventDefault()
        let vatNr = document.getElementById("vatNr").value
        let paymentTerm = document.getElementById("paymentTerm").value
        let num = Array.from(vatNr.slice(2));
        let vatBool;
        let termBool;

        // Kollar att vatNr är i korrekt format
        if (num.length === 10 && !isNaN(vatNr.slice(2)) && ((vatNr.slice(0, 2)).toUpperCase() === "SE"))  {
	        vatBool = true
        } else {
            vatBool = false
            alert("Vat Number must start with SE then followed by 10 numbers. Exapmle: SE1234567890")
        }
        // Kollar att payment term skickas med
        if (paymentTerm === "") {
            termBool = false
            alert("You have to add the payment term")
        } else {
            termBool = true 
        }

        if(vatBool && termBool) {
            const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
            const token = localStorage.getItem("webb20")
            fetch(url, {
                method: "PUT",
                body: JSON.stringify(customerData),
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                history.push(`customers/${customerId}/`)
            })
        } 
    }

    return (
        <div>
            <Header />
            {customerData
            ?
            <FormCustomerStyled onSubmit={handleOnSubmit}>
                {renderInput("name", "Customer Name")}
                {renderInput("email", "Customer Email", "email")}
                {renderInput("organisationNr", "Organisation Number")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("phoneNumber", "Phone Number", "tel")}
                {renderInput("reference", "Reference")}
                {renderInput("vatNr", "Vat Number")}
                {renderInput("website", "Website")}       
                <ButtonStyled type="submit" >UPDATE</ButtonStyled>
            </FormCustomerStyled>
            :
            <p>Loading...</p>
            }
            <Footer />
        </div>
    )
}
