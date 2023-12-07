import styled from "styled-components";

export const Container = styled.button`
width: 100%;
height: 55px;

background: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
border-radius: 10px;
padding: 16px 146px;
border: none;


text-align: center;
font-size: 16px;
font-weight: 500;

&:disabled {
    opacity: 0.5;
  }
`