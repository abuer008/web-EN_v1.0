import styled from 'styled-components';
import Link from 'next/Link';
// import MenuItem from './MenuItem';

const MenuList = [
    {
        id: 0,
        title: "Interactive Projects",
        destination: "/interactive-projects",
        isActive: true
    }, {
        id: 1,
        title: "Product Design",
        destination: "/product-projects",
        isActive: false
    }, {
        id: 2,
        title: "Minor Projects",
        destination: "/minor-projects",
        isActive: false
    }, {
        id: 3,
        title: "About",
        destination: "/about",
        isActive: false
    }, {
        id: 4,
        title: "Contact",
        destination: "/contact",
        isActive: false,
    }
]

function Menu() {

    return (
        <MenuWrapper>
            {MenuList.map(menuItem => {
                return <Link href={menuItem.destination} key={menuItem.id}>
                    <MenuItemActive>{menuItem.title}</MenuItemActive>
                </Link>
            })}
        </MenuWrapper>
    )
}

const MenuItemActive = styled.p`
    color: black;
    text-decoration: none;
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
max-width: 50%;
left: 25%;
position: sticky;
margin: 1em 0;
padding-top: 2em;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 14px;
text-align: center;

`

export default Menu