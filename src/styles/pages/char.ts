import styled from "styled-components";

export const Container = styled.main`
  width: 75rem;
  max-height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .button-wrapper{
    margin: 2rem 0 0;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 7rem;
    padding: .5rem 1rem;
    border: 0;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.primary};
    box-shadow: 0 1px 1px 2px rgba(0, 0, 0, 0.6);
    transition: filter 0.2;

      &:hover {
        filter: brightness(1.1);
      };
    

    @media (max-width: 1000px) {
      margin: 2rem auto;
    };

  };

  @media (max-width: 1000px) {
    width: 100%;
  };

  @media (max-width: 375px) {
      margin: 5rem auto;
    };
`;

export const Content = styled.div`
  width: 75rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: auto;
  
  .content {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin: 3rem auto;

    img {
      width: 25rem;
      border-radius: 8px;
      border: 2px solid ${props => props.theme.colors.strong};
      transition: transform .3s;

      &:hover {
        transform: scale(1.2);
      };
 
      @media (max-width: 1000px) {
       width: 15rem;
      };
    };

    .text {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        color: ${props => props.theme.colors.text};
        margin-bottom: 1.5rem;
      };

      p {
        color: ${props => props.theme.colors.text};

        strong {
          color: ${props => props.theme.colors.strong};
        };
      };
    };

    @media (max-width: 10024px) {
        max-width: 90%;
        padding: 0 2%;
        justify-content: center;
      };
  };
  
      @media (max-width: 1024px) {
        flex-direction: column;
        max-width: 100%;
        margin: 0;
      };
`