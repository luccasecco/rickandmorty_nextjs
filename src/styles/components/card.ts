import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  height: 40rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.5);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

`

export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-Content: center;

  img {
    width: 18rem;
    height: 18rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`
