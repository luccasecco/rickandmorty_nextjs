import styled from "styled-components";

export const Container = styled.header`
  max-width: 100%;
  padding: 1.5rem 0;
  background: ${props => props.theme.colors.primary};

  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 75rem;
    margin: 0 auto;
    color: ${props => props.theme.title};

    h1 {
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  };

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
      font-size: 0.7rem;
      text-align: center;
      justify-content: center;
      gap: 1rem;

      h1 {
        display: none;
      }
    };
  };
`