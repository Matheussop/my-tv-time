import {RiSearchLine} from "react-icons/ri";
import type {NextPage}
from 'next'
import {SideBarHome} from "./styles";
import { RewardCard } from "../RewardCard";

export function SideBar() {
  return (
    <>
      <SideBarHome>
        <div className="searchBox">
          <p>Procurar</p>
          <RiSearchLine size="24"
            color={'#A2A2A6'}/>
        </div>
        <div className="lastViews">
          <h2>
            Últimos assistidos
          </h2>
          <RewardCard title={'Batman Begins'}
            type={'Ação'}
            reward={5}/>
          <RewardCard title={'​Um Pombo Pousou Num Galho Refletindo Sobre a Existência.'}
            type={'Ação'}
            reward={2}/>
          <RewardCard title={'Pantera Negra.'}
            type={'Ação'}
            reward={2}/>
          <div className="btnMore">
            <p>Veja Mais</p>
          </div>
        </div>
        <div className="lastViews">
          <h2>
            Fávoritos
          </h2>
          <RewardCard title={'Batman Begins'}
            type={'Ação'}
            reward={5}/>
          <RewardCard title={'​Um Pombo Pousou Num Galho Refletindo Sobre a Existência.'}
            type={'Ação'}
            reward={2}/>
          <RewardCard title={'Pantera negra.'}
            type={'Ação'}
            reward={2}/>
          <div className="btnMore">
            <p>Veja Mais</p>
          </div>
        </div>
      </SideBarHome>
    </>
  )
}