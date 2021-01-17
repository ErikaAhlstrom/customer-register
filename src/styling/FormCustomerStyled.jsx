import styled from 'styled-components'
import colors from "./Colors"

const FormCustomerStyled = styled.form `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 1rem;
    max-width: 600px;
    margin: 2rem auto;
    align-self: center;
    justify-self: center;

`

export default FormCustomerStyled;