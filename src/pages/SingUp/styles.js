import styled from "styled-components";
import ImgBrackground from "../../assets/ImgBrackground.png"

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;


`


export const Form = styled.form`
 padding: 0 136px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

text-align: center;
> h1{
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
}

>p{
    color: #CAC4CF;
    font-size: 14px;
    font-weight: 400;
}

input{ 
    display: flex;
    flex-direction: column;
    gap: 8px;
}

h2{
    color: ${({ theme }) => theme.COLORS.WHITE_H2};
    text-align: center;
    font-size: 24px;
    font-weight: 500;

    margin: 48px 0 ;
}

button{
    margin: 28px 0 42px;
}

a{
    color: #FF859B;

text-align: center;
font-size: 16px;
font-weight: 400;
display: flex;
align-items: center;
}
.arrow-icon{
    font-size: 16px;
}
`



export const Background = styled.div`
flex: 1;
background: url(${ImgBrackground}) no-repeat center center;
background-size: cover;
`

