import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_NOTE};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE_H2};
  }

  > p {
    overflow: hidden;
    color: ${({ theme }) => theme.COLORS.TEXT_NOTE};
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 400;

    button{
      background: transparent;
      border-style: none;

    color: ${({ theme }) => theme.COLORS.TEXT_NOTE};
    font-size: 13px;
    font-weight: 400;
    }
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`