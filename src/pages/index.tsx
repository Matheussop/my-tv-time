import type { NextPage } from 'next'
import { useState } from 'react';
import { HomeContainer, NavigationHome, TypeStreaming } from './home.styles'


const Home: NextPage = () => {
  const [ typeStreaming, setTypeStreaming ] = useState('Movie');
  
  function handleChangeTypeStreming(type: string){
    setTypeStreaming(type)
  }

  return (
    <HomeContainer >
      <NavigationHome>
        <nav>
          <ul>
            <li>
              <TypeStreaming 
              onClick={ () => handleChangeTypeStreming('Series')}
              active={ typeStreaming === "Series" ? true : false }>
                Series</TypeStreaming>
            </li>
            <li>
              <TypeStreaming onClick={ () => handleChangeTypeStreming('Movie')}
              active={ typeStreaming === "Movie" ? true : false }>
              Filmes</TypeStreaming>
            </li>
            <li>
              <TypeStreaming onClick={ () => handleChangeTypeStreming('Anime')}
              active={ typeStreaming === "Anime" ? true : false }>
              Anime</TypeStreaming>
            </li>
          </ul>
        </nav>
      </NavigationHome>
    </HomeContainer>
  )
}

export default Home
