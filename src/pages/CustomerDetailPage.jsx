import React, {useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { UserDataContext } from '../contexts/UserDataContext'
import {ButtonStyled} from '../styling/ButtonStyled'
import {ButtonGreenStyled} from '../styling/ButtonStyled'

export default function CustomerDetailPage(props) {
    
    const {customerData, setCustomerData} = useContext(UserDataContext)
    const customerId = props.match.params.id
    const history = useHistory()

    useEffect(() => {
        getCustomerData()
    }, [])

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

    function deleteCustomer() {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
        const token = localStorage.getItem("ea")
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(() => history.push('/home'))
    }

    return (
        <div>
            <Header />
            {customerData
            ? (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{customerData.name}</td>
                            </tr>
                            <tr>
                                <td>Organisation Number</td>
                                <td>{customerData.organisationNr}</td>
                            </tr>
                            <tr>
                                <td>VAT Number</td>
                                <td>{customerData.vatNr}</td>
                            </tr>
                            <tr>
                                <td>Reference</td>
                                <td>{customerData.reference}</td>
                            </tr>
                            <tr>
                                <td>Payment Term</td>
                                <td>{customerData.paymentTerm}</td>
                            </tr>
                            <tr>
                                <td>Website</td>
                                <td>{customerData.website}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{customerData.email}</td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td>{customerData.phoneNumber}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <ButtonStyled onClick={deleteCustomer}>DELETE</ButtonStyled>
                    <ButtonGreenStyled><Link to={`/customers/${customerId}/update`}>UPDATE</Link></ButtonGreenStyled>
                    
                    <Footer />
                </div>
            )
            :
            <p>Loading...</p>
            }
        </div>
    )
}
