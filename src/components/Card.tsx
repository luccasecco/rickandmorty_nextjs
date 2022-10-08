import { Alien, Circle, GenderFemale, GenderMale, Person } from "phosphor-react";
import Link from 'next/link';
import { ICardProps } from "../../interfaces";
import { Container, ImgBox } from "../styles/components/card";

export function Card({
    id,
    name, 
    image, 
    status, 
    species, 
    gender,
  }: ICardProps) {

  return(
    <Container>
      <ImgBox>
        <Link href={`/char/${id}`}>
          <img src={image} alt={name}/>
        </Link>
      </ImgBox>
      
        <h1>{name}</h1>

        <div>
          <p>
            <Circle 
              size={20} 
              weight="fill" 
              color={status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray'}
            />
            Status: {status}
          </p>
          <p>
            {species === 'Human' ? 
            <Person size={20} weight="fill" color="#6d28d9" /> 
            : 
            <Alien size={20} weight="fill" color="#facc15" />
            }
            Species: {species}
          </p>
          <p>
            {gender === 'Male' ? 
            <GenderMale size={20} weight="fill" color="#1d4ed8"/> 
            : 
            <GenderFemale size={20} weight="fill" color="#be185d" />
            }
            Gender: {gender}
          </p>
        </div>
    </Container>
  )
}