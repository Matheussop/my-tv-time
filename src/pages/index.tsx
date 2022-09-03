import type { NextPage } from 'next'
import { useState } from 'react';
import { SideBar } from '../components/SideBar';

import { HomeContainer, 
          HomeContent, 
          NavigationHome, 
          PrimaryImage, 
          TypeStreaming, 
          ImageContainer, 
          CardsContainer,
          CardsStremingsCards,
          ImageCard, 
          ListStreamingWrapper} from './home.styles'
          
const Home: NextPage = () => {
  const [ typeStreaming, setTypeStreaming ] = useState('Movie');
  const imageBannerSRC = 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/35720ACD323F927C3A83D809D0F460BD3651740DA519BCC184B6F042057EA14D/scale?width=1200&aspectRatio=1.78&format=jpeg'
  const imageRecomended = 'https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg';
  const imageCategories = 'https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_.jpg';
  function handleChangeTypeStreming(type: string){
    setTypeStreaming(type)
  }

  const myLoader = ({src}: any) => {
    return src
  }

  return (
    <>
      <HomeContainer>
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
        <HomeContent>
          <ImageContainer>
            <PrimaryImage src={imageBannerSRC} loader={() => myLoader({src: imageBannerSRC})} alt="Banner Principal da página. Referente a um filme." width="900" height="400" layout='intrinsic' />
          </ImageContainer>
          <ListStreamingWrapper>
            <CardsContainer>
              <h2>
                Recomendados
              </h2>
              <CardsStremingsCards>
                <ImageCard src={imageRecomended} loader={() => myLoader({src: imageRecomended})} alt="Primeiro filme recomendado." width="225" height="225" layout='fixed'/>
                <ImageCard src={imageRecomended} loader={() => myLoader({src: imageRecomended})} alt="Primeiro filme recomendado." width="225" height="225" layout='fixed'/>
                <ImageCard src={imageRecomended} loader={() => myLoader({src: imageRecomended})} alt="Primeiro filme recomendado." width="225" height="225" layout='fixed'/>
                <ImageCard src={imageRecomended} loader={() => myLoader({src: imageRecomended})} alt="Primeiro filme recomendado." width="225" height="225" layout='fixed'/>
              </CardsStremingsCards>
            </CardsContainer>
            <CardsContainer>
              <h2>
                Categorias
              </h2>
              <CardsStremingsCards>
                <ImageCard src={imageCategories} loader={() => myLoader({src: imageCategories})} alt="Primeiro filme recomendado." width="225" height="225" layout='fixed'/>
                <ImageCard src={imageCategories} loader={() => myLoader({src: imageCategories})} alt="Primeiro filme recomendado." width="225" height="225" layout='fixed'/>
                <ImageCard src={imageCategories} loader={() => myLoader({src: imageCategories})} alt="Primeiro filme recomendado." width="225" height="225" layout='fixed'/>
                <ImageCard src={imageCategories} loader={() => myLoader({src: imageCategories})} alt="Primeiro filme recomendado." width="225" height="225" layout='fixed'/>
              </CardsStremingsCards>
            </CardsContainer>
          </ListStreamingWrapper>
        </HomeContent>
      </HomeContainer>
      <SideBar/>
    </>
  )
}

export default Home
