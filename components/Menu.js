import styled from 'styled-components';
import Link from 'next/Link';
import { menuList } from '../data/MainPageData';
import Image from 'next/image';

function Menu({isBlack}) {

    return (
        <MenuWrapper>
            {/*<Link href='/'>*/}
                <Image src={isBlack ? '/safari-pinned-tab.svg' : '/safari-pinned-tab_white.svg'} width='20' height='20'/>
            {/*</Link>*/}
            {menuList.map(menuItem => {
                return <Link href={menuItem.destination} key={menuItem.id}>
                    <MenuItemActive style={{color: isBlack ? 'black' : 'white'}}>{menuItem.title}</MenuItemActive>
                </Link>
            })}
        </MenuWrapper>
    )
}

const MenuItemActive = styled.a`
    
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
max-width: 56vw;
left: 22%;
position: fixed;
margin: 1em 0;
padding-top: 2.5em;
  z-index: 2;
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  font-family: Roboto,sans-serif;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 14px;
text-align: center;

`

export default Menu