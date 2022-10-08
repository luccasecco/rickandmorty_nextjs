import { Circle } from "phosphor-react";
import Link from 'next/link';
import { ICardProps } from "../../interfaces";
import { Container, ImgBox } from "../styles/components/card";

export function Card({
    id,
    name, 
    image, 
    status, 
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
            {status}
          </p>
        </div>
    </Container>
  )
}