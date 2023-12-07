import styled from "styled-components";

export const Container = styled.div`
width: 100%;

> header {
    background: ${({ theme }) => theme.COLORS.HEADER_PROFILE};
width: 100%;
height: 144px;

display: flex;
align-items: center;
padding: 0 124px;

 a{
    color: ${({ theme }) => theme.COLORS.PINK};

font-size: 16px;
font-weight: 400;
  text-decoration: none;
  cursor: pointer;
}
}`

export const Form = styled.form`
max-width: 340px;
margin: 0 auto;

> div:nth-child(4) {
    margin-top: 24px;

  }

  > div:nth-child(5) {
    margin-bottom: 24px;
  }`

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;
  
  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    
    cursor: pointer;

    input {
      display: none;
      
    }

    svg {
      width: 20px;
      height: 20px;
      
      background: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`