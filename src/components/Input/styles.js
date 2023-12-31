import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT} ;
  color: ${({ theme }) => theme.TEXT_INPUT};
  
  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;
    
    

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.SVG_GRAY} 
    }
  }

  > svg {
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.SVG_GRAY};
  }
`