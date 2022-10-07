import { GetServerSideProps } from "next";
import Link from 'next/link';

import { apiUrl } from "./api/url";

import { ICardProps } from "../../interfaces";

import { Card } from "../components/Card";
import { Loading } from "../components/Loading";

import { Container, Content } from "../styles/pages/home";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

interface HomeProps extends ICardProps{}

export default function Home({ data }) {
 const char = data.results as HomeProps[]
 const [characterSelected, setCharacterSelected] = useState<ICardProps[]>([])
 const [characterByStatus, setCharacterByStatus] = useState<ICardProps[]>([])

 function handleSearchCharByName(event: any) {
    event.preventDefault()
    const str = event.target.value
    const firstLetter = str.slice(0, 1).toUpperCase()
    const strRest = str.slice(1).toLowerCase()
    const newStr = `${firstLetter}${strRest}`

    const result = char.filter(item => item.name?.includes(newStr))
    setCharacterSelected(result)
  }

  function handleFilterCharByStatus(event: any) {
    event.preventDefault()

    const result = char.filter(item => item.status === event.target.value);
    setCharacterByStatus(result)
  }

  const arr = char.map(item => item.status)
  const filteredArr = arr.filter((item, i) => arr.indexOf(item) === i)

  return (
    <Content>
      <div className="search-box">
        <label htmlFor="search-country">
          <MagnifyingGlass size={20} />
          <input
            name="search-country"
            type="text" placeholder="Search for a country..."
            onChange={handleSearchCharByName}
          />
        </label>

        <select
          name="country"
          id="country"
          onChange={handleFilterCharByStatus}
        >
          <option value="">
            All Characters
          </option>

          {filteredArr.map(item => {
            return <option
              key={item}
            >
              {item}
            </option>
          })}

        </select>
      </div>

      <Container>
        {characterSelected.length === 0 && characterByStatus.length === 0 ? char.map(item => {
          return (
            <Link 
              key={item.id}
              href={`char/${item.id}`}
            >
              <Card 
                id={item.id}
                image={item.image}
                name={item.name}
                status={item.status}
                species={item.species}
                gender={item.gender}          
              />
            </Link>
          )
        }) : characterByStatus.length === 0 ? characterSelected.map(item => {
          return (
            <Link 
            key={item.id}
            href={`char/${item.id}`}
          >
            <Card 
              id={item.id}
              image={item.image}
              name={item.name}
              status={item.status}
              species={item.species}
              gender={item.gender}          
            />
          </Link>
          )
        }) : characterByStatus.map(item => {
          return (
            <Link 
            key={item.id}
            href={`char/${item.id}`}
          >
            <Card 
              id={item.id}
              image={item.image}
              name={item.name}
              status={item.status}
              species={item.species}
              gender={item.gender}          
            />
          </Link>
          )
        }) }     
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