import styled from "styled-components";

export const Container = styled.div`
textarea{
height: 274px;
width: 100%;
padding: 19px 16px;

border-style: none;
resize: none;

border-radius: 10px;
background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
}
`