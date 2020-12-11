import styled from 'styled-components';
import Link from 'next/Link';
import { menuList } from '../data/MainPageData';


function Menu() {

    return (
        <MenuWrapper>
            {menuList.map(menuItem => {
                return <Link href={menuItem.destination} key={menuItem.id}>
                    <MenuItemActive>{menuItem.title}</MenuItemActive>
                </Link>
            })}
        </MenuWrapper>
    )
}

const MenuItemActive = styled.a`
    color: black;
    
    //margin: 0 4em;
    //font-weight: bold;
    
    :hover {
    cursor: pointer;
      font-weight: bold;
    }
`

const MenuItemNormal = styled(MenuItemActive)`
font-weight: normal;
`

const MenuWrapper = styled.div`
width: 100%;
max-width: 50vw;
left: 25%;
position: fixed;
margin: 1em 0;
padding-top: 2em;
  z-index: 1;
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  font-family: Roboto,sans-serif;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 14px;
text-align: center;

`

export default Menu