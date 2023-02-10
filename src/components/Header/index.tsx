import { Logo } from '../Logo'
import { RiCommunityLine, RiSettings3Line, RiLogoutBoxRLine, RiTimerLine, RiHome2Line} from "react-icons/ri";
import { HeaderContainer, HeaderContent, BoxLogo } from './styles';
import { ActiveLink } from '../ActiveLink';
import { useRouter } from 'next/router';

export function Header(){ 
  const { asPath } = useRouter();

  const linkActive = asPath;

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
              <ActiveLink activeClassName={'active'} href="/"  name='Home'>
              </ActiveLink>
            </li>
            <li>
              <RiCommunityLine size="32" color={ linkActive === '/Community' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/Community" name='Comunidade'>
              </ActiveLink>
            </li>
          </ul>
          <span>Extras</span>
          <ul>
            <li>
              <RiTimerLine size="32" color={ linkActive === '/Time' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/Time">
                 d name='Tempo'e
              </ActiveLink>
            </li>
          </ul>
          <span>Gerais</span>
          <ul>
            <li>
              <RiSettings3Line size="32" color={ linkActive === '/Settings' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/Settings" name='Configurações'>
              </ActiveLink>
            </li>
            <li>
              <RiLogoutBoxRLine size="32" color={ linkActive === '/Logout' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/Logout" name='Sair'>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}