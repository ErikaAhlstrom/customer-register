import styled from 'styled-components'
import colors from "./Colors"

export const ButtonStyled = styled.button `
    border: solid 4px ${colors.coral};
    background-color: ${colors.white};
    padding: .2rem 1rem;
    width: fit-content;
    color: ${colors.coral};
    font-weight: 600;
    border-radius: 7px;
    cursor: pointer;
    &:hover, &:focus {
        color: ${colors.white};
        background-color: ${colors.coral};
        transition: .5s;
    }
    a {
        color: ${colors.coral};
        font-weight: 600;
        
        &:hover, &:focus {
            color: ${colors.white};
            background-color: ${colors.coral};
            transition: .5s;
        }
    }
`
export const ButtonGreenStyled = styled(ButtonStyled) `
    border: solid 4px ${colors.green};
    color: ${colors.green};
    margin-left: 1rem;
    &:hover, &:focus {
            background-color: ${colors.green};
        }
    
    a {
        
        &:hover, &:focus {
            background-color: ${colors.green};
        }
    }
`



