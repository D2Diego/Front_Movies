import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
height: 100vh;


> div{
    display: flex;
    justify-content: space-between;
    padding: 50px 122px;

    h1{
        color: #FFF;

    font-size: 32px;
    font-weight: 400;
    }
}
`

export const NewNote = styled(Link)`
display: flex;
align-items: center;
justify-content: center;

font-size: 16px;
font-weight: 400;
padding: 0px 32px;

background-color: ${({ theme }) => theme.COLORS.PINK};
border-radius: 8px;
`

export const Content = styled.div`
  padding: 50px 122px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
`