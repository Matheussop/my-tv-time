import { RiStarSLine } from 'react-icons/ri';
import styled from 'styled-components'

export const RewardCardContainer = styled.header`
  display: flex;

  .imagebox{
    max-width: 100px;
  }

  .streamingCardContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    .movieTitle{
      font-size: 1.1rem;
      font-weight: 500;
      color: ${({theme}) => theme.colors.gray_medium};
    }

    .movieType{
      font-size: 0.9rem;
      color: ${({theme}) => theme.colors.gray_light};
    }

    .stars{
      margin-top: 1rem;
    }
  }
`;

export const DefaultImage = styled.div`
  background-color: ${({theme}) => theme.colors.gray_light};
  border-radius: 0.5rem;
  width: 75px;
  height: 100px;
  margin-right: 1.1rem;
`;

