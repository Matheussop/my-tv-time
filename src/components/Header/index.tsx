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
              <ActiveLink activeClassName={'active'} href="/" >
                <a>Home</a>
              </ActiveLink>
            </li>
            <li>
              <RiCommunityLine size="32" color={ linkActive === '/Community' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/Community">
                <a>Comunidade</a>
              </ActiveLink>
            </li>
          </ul>
          <span>Extras</span>
          <ul>
            <li>
              <RiTimerLine size="32" color={ linkActive === '/Time' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/Time">
                <a>Tempo de tela</a>
              </ActiveLink>
            </li>
          </ul>
          <span>Gerais</span>
          <ul>
            <li>
              <RiSettings3Line size="32" color={ linkActive === '/Settings' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/Settings">
                <a>Configurações</a>
              </ActiveLink>
            </li>
            <li>
              <RiLogoutBoxRLine size="32" color={ linkActive === '/Logout' ? '#F24E1E' : '#A2A2A6'} />
              <ActiveLink activeClassName={'active'} href="/Logout">
                <a>Sair</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}