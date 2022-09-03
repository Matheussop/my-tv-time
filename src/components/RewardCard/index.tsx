import Image from "next/image";
import { RewardCardContainer, DefaultImage } from "./styles";
import { RiStarSFill, RiStarSLine} from "react-icons/ri";

interface RewardCardProps{
  title: string;
  type: string;
  img?: string;
  reward: number;
}

export function RewardCard({title, type, reward, img = '', }: RewardCardProps){ 
  title = title.length > 30 ? title.substring(0,20)+'...' : title
  const myLoader = ({src}: any) => {
    return src
  }
  return(
    <RewardCardContainer>
      <div className="imagebox">
        { img ? 
          <Image src={img} loader={() => myLoader({src: img})} alt="Primeiro filme da categoria de últimos vistos." width="60" height="75" layout='fixed'/> :
          <DefaultImage/>
        }
      </div>
      <div className="streamingCardContent">
        <p className="movieTitle">{title}</p>
        <p className="movieType">{type}</p>
        <div className="stars">
        
          { [...Array(5)].map((item,index) => {
              return index+1 <= reward ?  
              <RiStarSFill key={index} size="1.5rem" color="#F5C518"/> : 
              <RiStarSLine key={index} size="1.5rem" color="#F5C518"/>
            })
          }
          
        </div>
      </div>
    </RewardCardContainer>
  )
}