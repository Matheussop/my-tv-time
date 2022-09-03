import styled from 'styled-components'


export const SideBarHome = styled.div`
  width: 20rem;
  border-left: 1px solid var(--gray-light);
  position: sticky; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: auto;
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

  .btnMore{
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%;
    height: 2.5rem;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 1.2rem;
    margin-top: 1rem;
    p{ 
      font-size: 1rem;
      font-weight: bold;
    }
  }
`;