import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from "next/router";

import {PhoneMenuData} from "../../data/MenuData";

const MenuItem = ({item, translate = false, href}) => {
    const router = useRouter()

    return (
        <>
            <ActiveBar style={{opacity: router.asPath === item.link ? '1' : '0'}}/>
            <Link href={item.link}>
            <ItemWrapper>
                <IconWrapper>
                    <Image src={item.iconSrc} width={item.width} height={item.height}/>
                </IconWrapper>
                <Span>{item.name}</Span>
            </ItemWrapper>
            </Link>
        </>
    )
}

export const PhoneMenu = () => {
    return (
        <Wrapper>
            <NavTitle>Navigation Menu</NavTitle>
            <NavMenu>
                <Ul>
                    <Li>
                        <MenuItem item={PhoneMenuData.work}/>
                        <Ul>
                            <Li>
                                <MenuItem item={PhoneMenuData.designProcess}/>
                            </Li>
                            <Li>
                                <MenuItem item={PhoneMenuData.implementation}/>
                            </Li>
                            <Li>
                                <MenuItem item={PhoneMenuData.designMetrics}/>
                            </Li>
                        </Ul>
                    </Li>
                    <Li>
                        <MenuItem item={PhoneMenuData.interactiveProjects}/>
                    </Li>
                    <Li>
                        <MenuItem item={PhoneMenuData.productDesign}/>
                    </Li>
                    <Li>
                        <MenuItem item={PhoneMenuData.miniProjects}/>
                    </Li>
                    <Li>
                        <MenuItem item={PhoneMenuData.about}/>
                    </Li>
                    <Li>
                        <MenuItem item={PhoneMenuData.contact}/>
                    </Li>
                </Ul>
            </NavMenu>
            <NavFooter>
            </NavFooter>
        </Wrapper>
    )
}

const SiteMapItem = ({link, children}) => (
    <Link href={link}>
        {children}
    </Link>
)

export const SiteMap = ({isBlack}) => {
    return (
        <SiteWrapper style={{color: isBlack ? 'black' : 'white'}}>
            <Break style={{borderColor: isBlack ? 'black' : 'white'}}/>
            <SiteTitle>SiteMap</SiteTitle>
            <Ul>
                <Li>
                    <spand>Work</spand>
                    <Ul>
                        <SiteMapItem link={PhoneMenuData.designProcess.link}>
                            <SubLi>Design process</SubLi>
                        </SiteMapItem>
                        <SiteMapItem link={PhoneMenuData.implementation.link}>
                        <SubLi>Implementation</SubLi>
                        </SiteMapItem>
                        <SiteMapItem link={PhoneMenuData.designMetrics.link}>
                        <SubLi>Design metrics</SubLi>
                        </SiteMapItem>
                    </Ul>
                </Li>
                <SiteMapItem link={PhoneMenuData.interactiveProjects.link}>
                <Li>Interactive Projects</Li>
                </SiteMapItem>
                <SiteMapItem link={PhoneMenuData.productDesign.link}>
                <Li>Product Design</Li>
                </SiteMapItem>
                <SiteMapItem link={PhoneMenuData.miniProjects.link}>
                <Li>Mini-projects</Li>
                </SiteMapItem>
                <SiteMapItem link={PhoneMenuData.about.link}>
                <Li>About</Li>
                </SiteMapItem>
                <SiteMapItem link={PhoneMenuData.contact.link}>
                <Li>Contact</Li>
                </SiteMapItem>
            </Ul>
        </SiteWrapper>
    )
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const IconWrapper = styled.div`
  margin-right: 0.7em;
`

const Span = styled.span``

// --------------------

const SiteWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 1em;
`

const SiteTitle = styled.h3`
`

// -----------------

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  max-width: 360px;
  min-width: 240px;
  height: 31em;
  right: 10%;
  top: 13%;

  z-index: 10;

  background-color: white;
  border-radius: 15px;
`

const NavTitle = styled.h4`
  margin-bottom: 0;
  margin-left: 1em;
  color: #c1c1c1;
`

const NavMenu = styled.div`
  margin-left: 0.3em;
  width: 100%;
`

const NavFooter = styled.footer`
  background-color: #333333;
  height: 3.4em;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 0 2em;
`

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

`


const Li = styled.li`
  margin: 1.4em;
`

const SubLi = styled(Li)`
  font-weight: 300;
`

const Break = styled.div`
  width: 100%;
  margin-top: 5em;
  border-bottom: 1px solid;
`

const ActiveBar = styled.div`
  position: absolute;
  z-index: -1;
  padding: 7px;
  background: #ededed;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.1);
  width: 225px;
  height: 17px;
  right: 0;
  transform: translate(0, -25%);
  
  transition: 0.3s;
`
