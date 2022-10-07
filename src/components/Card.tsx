import Image from "next/image";
import { Alien, Circle, GenderFemale, GenderMale, Person } from "phosphor-react";
import { ICardProps } from "../../interfaces";
import { Container, ImgBox } from "../styles/components/card";
import { Content } from "../styles/home";

export function Card({
    name, 
    image, 
    status, 
    species, 
    gender, 
  }: ICardProps) {

  return(
    <Container>
      <ImgBox>
        <img src={image} alt="" width={25} height={35}/>
      </ImgBox>
      
        <h1>{name}</h1>
        <p>
          <Circle 
            size={20} 
            weight="fill" 
            color={status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray'}
          />
          {status}
        </p>
        <p>
          {species === 'Human' ? 
          <Person size={20} weight="fill" color="#262626" /> 
          : 
          <Alien size={20} weight="fill" color="#facc15" />
          }
          {species}
        </p>
        <p>
          {gender === 'Male' ? 
          <GenderMale size={20} weight="fill" color="#1d4ed8"/> 
          : 
          <GenderFemale size={20} weight="fill" color="#7e22ce" />
          }
          {gender}
        </p>
    </Container>
  )
}