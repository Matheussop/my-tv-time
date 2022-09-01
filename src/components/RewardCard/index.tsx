import Image from "next/image";
import { RewardCardContainer, DefaultImage } from "./styles";
import { RiStarSFill, RiStarSLine} from "react-icons/ri";

interface RewardCardProps{
  movieTitle: string;
  movieType: string;
}

export function RewardCard({movieTitle, movieType}: RewardCardProps){ 
  const refImage = '';

  const myLoader = ({src}: any) => {
    return src
  }
  return(
    <RewardCardContainer>
      <div className="imagebox">
        { refImage ? 
          <Image src={refImage} loader={() => myLoader({src: refImage})} alt="Primeiro filme da categoria de últimos vistos." width="60" height="75" layout='fixed'/> :
          <DefaultImage/>
        }
      </div>
      <div className="streamingCardContent">
        <p className="movieTitle">{movieTitle}</p>
        <p className="movieType">{movieType}</p>
        <div className="stars">
          <RiStarSFill size="1.5rem" color="#F5C518"/>
          <RiStarSFill size="1.5rem" color="#F5C518"/>
          <RiStarSFill size="1.5rem" color="#F5C518"/>
          <RiStarSLine size="1.5rem" color="#F5C518"/>
          <RiStarSLine size="1.5rem" color="#F5C518"/>
        </div>
      </div>
    </RewardCardContainer>
  )
}