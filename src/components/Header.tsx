import Switch from 'react-switch';
import { useContext } from "react";
import { ThemeContext } from 'styled-components'
import { Container } from '../styles/components/header';
import { Moon, Sun } from 'phosphor-react';
import Link from 'next/link';
import { IHeaderProps } from '../../interfaces';
import Image from 'next/image';

import logoImgDark from '../../public/logoDarkMode.png'
import logoImgLight from '../../public/logoLightMode.png'

export function Header({toggleTheme}: IHeaderProps){
  const { colors, title } = useContext(ThemeContext)

  return(
    <Container>
      <div className="content">
          <Image 
            src={title === 'dark' ? logoImgDark : logoImgLight} 
            width={title === 'dark' ? 80 : 100} 
            height={70}
          />

        <Link href="/">
          <h1>Rick And Morty</h1>
        </Link>
        <Switch 
              className="switch"
              onChange={toggleTheme}
              checked={title === 'dark'}
              uncheckedIcon={false}
              checkedIcon={false}
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    borderRadius: '50%',
                    color: '#075985',
                    lineHeight: 0,
                  }}
                >
                  <Moon 
                    size={15} 
                    weight="bold" 
                    />
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "#d19f09",
                    borderRadius: '50%',
                    lineHeight: 0,
                  }}
                >
                  <Sun 
                    size={15} 
                    weight="bold" 
                  />
                </div>
              }
              height={20}
              width={50}
              handleDiameter={20}
              offColor="#323232"
              onColor={colors.secundary}
        />
      </div>
    </Container>
  )
}


