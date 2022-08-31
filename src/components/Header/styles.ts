import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 100vh;
  width: 16rem;
  border-right: 1px solid var(--gray-light);
  position: sticky; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 0 0.5rem;

  nav{
    padding: 0 2rem;
    display: flex;
    flex-direction: column;

    span{
      margin: 1.5rem 0;
    }

    a {
      color: var(--light-gray-light);

      transition: color 0.2s;

      margin-left: 0.5rem;

      & + a {
        margin-left: 2rem;
      }

      &:hover {
        color: var(--white);
      }

      &.active {
        color: var(--primary);
        font-weight: bold;
      }
    }

    ul>li{
      list-style-type: none;
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
  }
`;

export const BoxLogo = styled.div`
  margin: 80px 0;
`;

