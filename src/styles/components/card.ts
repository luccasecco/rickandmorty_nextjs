import styled from "styled-components";

export const Container = styled.a`
  width: 20rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 8px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
  };

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  };

  &:hover {
    transform: scale(1.1);
    border: 1px solid ${props => props.theme.colors.strong};
  };

  div {
    margin-top: auto;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  };

  @media (max-width: 280px){
    width: 12rem;
    margin-top: 0;

    h1{
      font-size: .875rem;
    }

    p{
      font-size: .875rem;
    }
  }
`;

export const ImgBox = styled.a`
  display: flex;
  align-items: center;
  justify-Content: center;

  img {
    width: 18rem;
    height: 18rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    cursor: pointer;

    @media (max-width: 280px){
    width: 10rem;
    height: 10rem;
  }
  };
`;
