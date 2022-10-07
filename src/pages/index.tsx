import { GetStaticProps } from "next";
import Link from 'next/link';

import { apiUrl } from "./api/url";

import { ICardProps } from "../../interfaces";

import { Card } from "../components/Card";
import { Loading } from "../components/Loading";

import { Container, Content } from "../styles/home";

interface HomeProps extends ICardProps{}

export default function Home({ data }) {
 const char = data.results as HomeProps[]

  return (
    <Content>
      <Container>
        {char ? char.map(item => {
          return (
            <Link 
              key={item.id}
              href={`char/${item.id}`}
            >
              <Card 
               
                image={item.image}
                name={item.name}
                status={item.status}
                species={item.species}
                gender={item.gender}          
              />
            </Link>
          )
        }) : <Loading />}     
      </Container>
    </Content>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(apiUrl + '/character')
  const data = await response.json();
  
  return {
    props: {
      data
    },
    revalidate: 60 * 60 * 2
  }
}