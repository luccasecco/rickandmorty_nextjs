import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";
import { ICharProps } from "../../../interfaces";
import { Container, Content } from "../../styles/pages/char";
import { apiUrl } from "../api/url";

export default function Char({ character }: ICharProps){
  
  return(
    <Container>
      <Head>
        <title>Rick And Morty | {character.name}</title>
      </Head>
      <div className="button-wrapper">
        <Link href='/'>
          <ArrowLeft size={32} weight="bold" style={{cursor: 'pointer'}} />
        </Link>
      </div>
      <Content>
        {character && <div className="content">
          <img src={character.image} alt={character.name} width={320}/>
          <div className="text">
            <h1>{character.name}</h1>
            <p> <strong>Status:</strong> {character.status}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Origin:</strong> {character.origin.name}</p>
            <p><strong>Location:</strong> {character.location.name}</p>
            <p><strong>Apparitions:</strong> {character.episode.length} {character.episode.length === 1 ? 'episode' : 'episodes'}</p>
          </div>
        </div>}
      </Content>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, {id: string }> = async ({ params }) => {
  const charId = params.id

  const response = await fetch(apiUrl + `/${charId}`)
  const character = await response.json()

  return {
    props: {
      character
    },
  }
}