import styled from "styled-components";

export const Container = styled.div`

main{ 
    padding: 0 126px ;

    > div{
        display: flex;
        flex-direction: row;
        gap: 40px;
        align-items: center;
        justify-content: center;
    }
}
h1{
    color: #F4EDE8;
    font-size: 36px;
    font-weight: 500;
}

a{
    margin:40px 0 24px 0;
    color: #FF859B;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
}

section{
    div{
        display: flex;
        flex-direction: row;
        gap: 40px;
        align-items: center;
        justify-content: flex-start;
    }

    textarea{
        margin-top: 40px;
    }
}
`


export const Blackboard = styled.div`
border-radius: 8px;
background: #0D0C0F;
padding: 16px;

`;