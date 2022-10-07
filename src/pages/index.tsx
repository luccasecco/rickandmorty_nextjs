import { GetServerSideProps } from "next";
import { ICardProps } from "../../interfaces";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import { Container, Content } from "../styles/home";
import { apiUrl } from "./api/url";

interface HomeProps {
  characters: ICardProps[]
}

export default function Home({ data }) {
 const char = data.results

  return (
    <Content>
      <Container>
        {char ? char.map(item => {
          return (
            <Card 
              key={item.id}
              image={item.image}
              name={item.name}
              status={item.status}
              species={item.species}
              gender={item.gender}          
            />
          )
        }) : <Loading />}     
      </Container>
    </Content>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(apiUrl + '/character')
  const data = await response.json();
  
  return {
    props: {
      data
    },
  }
}