import { GetServerSideProps, GetStaticProps } from "next";
import Link from "next/link";
import { ArrowArcLeft } from "phosphor-react";
import { Container, Content } from "../../styles/pages/char";
import { apiUrl } from "../api/url";

export default function Char({ character }){
  
  return(
    <Container>
      <div className="button-wrapper">
        <Link href='/'><ArrowArcLeft size={32} style={{ cursor: 'pointer'}} /></Link>
      </div>
      <Content>
        <div className="content">
          <img src={character.image} alt={character.name} width={320}/>
          <div className="text">
            <h1>{character.name}</h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin.name}</p>
            <p>{character.location.name}</p>
          </div>
        </div>
      </Content>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<any, {id: string }> = async ({ params }) => {
  const charId = params.id

  const response = await fetch(apiUrl + `/${charId}`)
  const character = await response.json()

  return {
    props: {
      character
    },
  }
}