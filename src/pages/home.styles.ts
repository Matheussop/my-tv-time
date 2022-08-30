import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 8rem 13rem ; 
  display: flex;
`;

export const NavigationHome = styled.header`
   display: flex;

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

