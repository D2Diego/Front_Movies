import styled from "styled-components";




export const Container = styled.div`
main{
    margin: 40px 126px;
}

a{
    font-style: none;
    color: #FF859B;
    font-size: 16px;
    font-weight: 400;

    display: flex;
    align-items: center;
    gap: 8px;
}



.divTitle{
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 24px;
    gap: 19px;


    h1{
    color: var(--White, #F4EDE8);
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

    span{
        display: flex;
        gap: 10px;
    }

        svg {
        width: 20px;
        height: 20px;
        color: #FF859B;
      }
    
}

.divSubTitle{

    display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 48px;
    img{
        width: 16px;
        height: 16px;
        border-radius: 50%;

    }
    p, span{
        color: #F4EDE8;

    text-align: justify;
    font-size: 16px;
    font-weight: 400;
    }

    svg{
        color: #FF859B;
    }
}

.divTags{
        display: flex;
        gap: 8px;
        margin-bottom: 40px;
    }

    p{
        color: #F4EDE8;

    text-align: justify;
    font-size: 16px;
    font-weight: 400;
    
    }
`