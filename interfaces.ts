export interface ICardProps {
  id: string;
  name: string;
  image : string;
  status: string;
  species: string;
  gender: string;
}
export interface ICharProps {
  character: {
    image: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
      name: string;
    }
    location: {
      name: string;
    }
    episode: number[]
  }
}

export interface IHeaderProps {
  toggleTheme: () => void
}

export interface IHomeProps{
  data: {
    info: {
      next: string;
    }
    results: ICardProps[],
  }
}