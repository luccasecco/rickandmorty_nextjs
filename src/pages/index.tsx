import { GetServerSideProps } from "next";
import Link from 'next/link';

import { apiUrl } from "./api/url";

import { ICardProps } from "../../interfaces";

import { Card } from "../components/Card";

import { Container, Content } from "../styles/pages/home";
import { MagnifyingGlass, PlusCircle } from "phosphor-react";
import { ChangeEvent, useEffect, useState } from "react";

interface HomeProps extends ICardProps{}

export default function Home({ data }) {
 const {info, results: defaultResults = [] } = data
 const [characterSelected, setCharacterSelected] = useState<ICardProps[]>([])
 const [characterFiltered, setCharacterFiltered] = useState<ICardProps[]>([])
 const [results, setResults] = useState<ICardProps[]>(defaultResults)
 const [page, setPage] = useState({
   ...info,
   current: apiUrl
  })
  
  const arr = results.map(item => item.name)
  const filteredArr = arr.filter((item, i) => arr.indexOf(item) === i)

  const { current } = page

 function handleSearchCharByName(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    const str = event.target.value
    const firstLetter = str.slice(0, 1).toUpperCase()
    const strRest = str.slice(1).toLowerCase()
    const newStr = `${firstLetter}${strRest}`

    const result = results.filter(item => item.name?.includes(newStr))
    setCharacterSelected(result)
  }

  function handleFilterCharByName(event: ChangeEvent<HTMLSelectElement>) {
    event.preventDefault()

    const result = results.filter(item => item.name === event.target.value)
   
    setCharacterFiltered(result)
  }

  useEffect(() => {
    if(current === apiUrl) return;

    async function request() {
      const res = await fetch(current)
      const nextData = await res.json();

      setPage({
        current,
        ...nextData.info
      });

      if(!nextData.info?.prev) {
        setResults(nextData.results)
        return;
      };

      setResults(prev => {
        return [
          ...prev,
          ...nextData.results
        ]
      })
    }
    request()
  }, [current])

  function handleLoadMoreChars() {
    setPage(prev => {
      return {
        ...prev,
        current: page?.next
      }
    })

    setCharacterSelected([]);
    setCharacterFiltered([]);
  }

  return (
    <Content>
      <div className="search-box">
        <label htmlFor="search-country">
          <MagnifyingGlass size={20} />
          <input
            name="search-country"
            type="text" placeholder="Search for a character..."
            onChange={handleSearchCharByName}
          />
        </label>

        <select
          name="country"
          id="country"
          onChange={handleFilterCharByName}
        >
          <option value="">
            All Characters
          </option>

          {filteredArr.map(item => {
            return (
            
            <option
              key={item}
            >
              {item}
            </option>
            
            )
          })}


        </select>
      </div>

    

      <Container>
        {characterSelected.length === 0 && characterFiltered.length === 0 ? results.map(item => {
          return (
            <Link 
              key={item.id}
              href={`char/${item.id}`}
            >
              <Card 
                id={item.id}
                image={item.image}
                name={item.name.length <= 12 ? item.name : item.name.slice(0, 12) + '...'}
                status={item.status} 
                species={item.species} 
                gender={item.gender}      
              />
            </Link>
          )
        }) : characterFiltered.length === 0 ? characterSelected.map(item => {
          return (
            <Link 
            key={item.id}
            href={`char/${item.id}`}
          >
            <Card 
              id={item.id}
              image={item.image}
              name={item.name.length <= 12 ? item.name : item.name.slice(0, 12) + '...'}
              status={item.status} 
              species={item.species}
              gender={item.gender}            
            />
          </Link>
          )
        }) : characterFiltered.map(item => {
          return (
            <Link 
            key={item.id}
            href={`char/${item.id}`}
          >
            <Card 
              id={item.id}
              image={item.image}
              name={item.name.length <= 12 ? item.name : item.name.slice(0, 12) + '...'}
              status={item.status}
              species={item.species} 
              gender={item.gender}      
            />
          </Link>
          )
        }) }     

      </Container>
        <button onClick={handleLoadMoreChars}>
          <PlusCircle size={32} weight="bold" />
          More chars
        </button>
    </Content>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(apiUrl)
  const data = await response.json();
  
  return {
    props: {
      data
    },
  }
}