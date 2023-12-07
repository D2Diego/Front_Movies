import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER_BOTTOM};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 123px;

  h1{
    color: #FF859B;
    font-size: 24px;
    margin-right: 64px;
  }

  input {
    height: 56px;
    width: 100%;
    
    border-radius: 10px;

    padding: 12px;
    background: #262529;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 14px;

    }
  }
  `

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: inline-flex;
flex-direction: column;
align-items: flex-end;
margin-left: 64px;
margin-right: 9px;
    
    
    
    > strong {
    color: ${({ theme }) => theme.COLORS.WHITE_H2};
    font-size: 14px;
    white-space: nowrap;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.SVG_GRAY};
    font-size: 14px;
    display: flex;
    flex-direction: row-reverse;
  }
  }
`;
