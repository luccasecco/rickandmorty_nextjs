import styled from 'styled-components';

export const Container = styled.div`
  max-width: 75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.5rem;
  margin: 4rem auto;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  };
`;

export const Content = styled.div`
  max-width: 75rem;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .search-box {
    max-width: 75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 22.5rem;
    margin: 0 auto;

    label {
    display: flex;
    align-items: center;

    gap: 1rem;
    border-radius: 8px;
    padding: 1rem;
    background: ${props => props.theme.colors.secundary};
    

      svg {
        color: ${props => props.theme.colors.primary}
      };

      @media (max-width: 768px) {
        width: 20rem;
      };
   };

   label {
      @media (max-width: 280px) {
        display: none;
      };
   };

    input {
      width: 25rem;
      color: ${props => props.theme.colors.primary};
      background: transparent;
      border: 0;
  
      &::placeholder {
        color: ${props => props.theme.colors.primary};
      };
  
      &:focus {
        outline: 0;
      };
    };

    select {
      border: 0;
      width: 15rem;
      border-radius: 8px;
      padding: 1rem;
      color: ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.secundary};
      cursor: pointer;

      &:focus {
        outline: none;
        box-shadow: 0 2px 2px 2px ${props => props.theme.colors.primary};
      };

      @media (max-width: 1000px) {
        display: none;
       };
    };

    @media (max-width: 1000px) {
      flex-direction: column;
      padding: 0 2%;
      justify-content: center;
      width: 20%;
      margin: 1rem auto;
    };

  };

  button {
    width: 15rem;
    border: 0;
    border-radius: 8px;
    padding: 1rem;
    margin: 2rem auto;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    color: ${props => props.theme.colors.primary};

    background-color: ${props => props.theme.colors.secundary};
    transition: filter 0.2s ease-in-out;

    &:hover{
      transform: scale(1.1);
    };
  };
`;