import styled from "styled-components";

export const Container = styled.header`
  max-width: 100%;
  padding: 2rem 5rem;
  background: ${props => props.theme.colors.primary};

  h1 {
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  };
  
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75rem;
    margin: 0 auto;
    color: ${props => props.theme.title};

    a{
      text-decoration: none;
      color: ${props => props.theme.colors.text};
      transition: color 0.2s;
  
      &:hover{
        color: ${props => props.theme.colors.secundary}; 
      };
    };

    .switch {
      padding: 0 2%;

      .checkedIcon, .uncheckedIcon{
        display: flex;
        flex-direction: column;
      };
    };
    
    @media (max-width: 1000px) {
      max-width: 100%;
      flex-direction: column;
      font-size: 0.7rem;
      text-align: center;
      gap: 1rem;
    };
  };
`