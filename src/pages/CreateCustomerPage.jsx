import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { UserDataContext } from '../contexts/UserDataContext'
import { ButtonStyled } from '../styling/ButtonStyled'
import FormCustomerStyled from '../styling/FormCustomerStyled'
import InputCustomerStyled from '../styling/InputCustomerStyled'

export default function CreateCustomerPage() {
    const {customerData, setCustomerData, customerList, setCustomerList} = useContext(UserDataContext)
    const history = useHistory()

    function renderInput(name, label, type) {
        return (
            <>   
                <label>{label}</label>
                <InputCustomerStyled 
                    name={name}
                    type={type || "text"}
                    onChange={handleOnChange}
                    id={name}
                />
            </>
        )
    }

    function handleOnChange(e) {
        setCustomerData({...customerData, [e.target.name]: e.target.value})
    }

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
        if (vatBool && termBool) {
            const url = "https://frebi.willandskill.eu/api/v1/customers/"
            const token = localStorage.getItem("ea")
            fetch(url, {
                method: "POST",
                body: JSON.stringify(customerData),
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCustomerData({...customerData, })
                history.push("/home")
            })
        }
    }

    return (
        <div>
            
            <Header />            
            <FormCustomerStyled onSubmit={handleOnSubmit}>
                {renderInput("name", "Name")}
                {renderInput("organisationNr", "Organisation Number", "number")}
                {renderInput("vatNr", "Vat Number")}
                {renderInput("reference", "Reference")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("website", "Website")}
                {renderInput("email", "Email", "email")}
                {renderInput("phoneNumber", "Phone Number", "number")}
                
                <ButtonStyled type="submit">CREATE</ButtonStyled>
            </FormCustomerStyled>
            <Footer />
        </div>
    )
}
