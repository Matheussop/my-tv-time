import styled from 'styled-components'
import Image from 'next/image'

export const HomeContainer = styled.div`
  padding: 4rem 13rem ; 
  width: 80vw;
  display: flex;
  flex-direction: column;
`;

export const NavigationHome = styled.header`
    ul{
      display: flex;

      li{
        list-style-type: none;
        margin: 1rem;
        font-size: 1.5rem;
      }
      
    }
`

interface TypeStreamingProps{
  active: boolean;
}
export const TypeStreaming = styled.a<TypeStreamingProps>`
  cursor: pointer;

  color: ${({theme, active}) => active ? theme.colors.primary : theme.colors.gray_light};
`;


export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  padding: 2.1rem 0;
  display: flex;
`;

export const PrimaryImage = styled(Image)`
  border-radius: 1.2rem;
`;

export const CardsContainer = styled.div`
  h2{
    font-size: 1.5rem;
    margin: 1rem;
    color: ${({theme}) => theme.colors.gray_light};
  }
`;

export const CardsStremingsCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  width: 110%;
  margin-left: -2rem;
`;

export const ImageCard = styled(Image)`
  border-radius: 0.5rem;
`;

export const ListStreamingWrapper = styled.div`
  div:first-child{
    padding-bottom: 1rem;
  }
`;

export const SideBarHome = styled.div`
  height: 100vh;
  width: 20rem;
  border-left: 1px solid var(--gray-light);
  position: sticky; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 1280;
  padding: 1.5rem;
  
  .searchBox{
    margin-top: 3rem;
    border: 1px solid var(--gray-light);
    border-radius: 1.5rem;
    width: 14rem;
    height: 2.5rem;

    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    justify-content: space-between;
  }

  .lastViews{
    margin: 2.5rem 0;

    h2{
      font-size: 1.2rem;
      margin: 2rem 0;
      color: ${({theme}) => theme.colors.gray_light};
    }
  }
`;