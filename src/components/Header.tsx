import Switch from 'react-switch';
import { useContext } from "react";
import { ThemeContext } from 'styled-components'
import { Container } from '../styles/components/header';

interface HeaderProps {
  toggleTheme: () => void
}

export function Header({toggleTheme}: HeaderProps){
  const { colors, title } = useContext(ThemeContext)

  return(
    <Container>
      <div className="content">
        <h1>RickAndMorty</h1>
        <Switch 
              className="switch"
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor="#323232"
              onColor={colors.secundary}
        />
      </div>
    </Container>
  )
}