"use client"
import { Logo } from '../Logo'
import { RiCommunityLine, RiSettings3Line, RiLogoutBoxRLine, RiTimerLine, RiHome2Line} from "react-icons/ri";
import { HeaderContainer, HeaderContent, BoxLogo } from './styles';
import { ActiveLink } from '../ActiveLink';
import { usePathname } from 'next/navigation';

export function Header(){ 
  const asPath  = usePathname();
  const linkActive = asPath ? asPath : '/';
  
  return(
    <HeaderContainer>
      <HeaderContent>
        <BoxLogo>
          <Logo />
        </BoxLogo>
        <nav>
          <span>Menu</span>
          <ul>
            <li>
              <RiHome2Line size="32" color={ linkActive === '/' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/"  name='Home'/>
              
            </li>
            <li>
              <RiCommunityLine size="32" color={ linkActive === '/Community' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/Community" name='Comunidade'/>
              
            </li>
          </ul>
          <span>Extras</span>
          <ul>
            <li>
              <RiTimerLine size="32" color={ linkActive === '/Time' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/Time" name='Tempo de tela'/>
              
            </li>
          </ul>
          <span>Gerais</span>
          <ul>
            <li>
              <RiSettings3Line size="32" color={ linkActive === '/Settings' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/Settings" name='Configurações'/>
              
            </li>
            <li>
              <RiLogoutBoxRLine size="32" color={ linkActive === '/Logout' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/Logout" name='Sair'/>
              
            </li>
          </ul>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}