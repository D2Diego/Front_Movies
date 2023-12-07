import styled from 'styled-components'



export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isNew'].includes(prop),
})`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.TEXT_NOTEITEM};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.WHITE_H2}` : "none"};

  
  border-radius: 10px;
  padding-right: 6px;

  > button { 
    border: none;
    background: none;
  }

  .button-delete {
    color: #FF859B;
  }

  .button-add {
    color: #FF859B;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.TEXT_NOTEITEM};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`