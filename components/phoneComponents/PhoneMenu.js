import styled from 'styled-components'
import Image from 'next/image'

import { PhoneMenuData } from "../../data/MenuData";

const MenuItem = ({item, translate = false}) => {
    return (
        <ItemWrapper>
            <IconWrapper>
                <Image src={item.iconSrc} width={item.width} height={item.height} />
            </IconWrapper>
            <Span>{item.name}</Span>
        </ItemWrapper>
    )
}

export const PhoneMenu = () => {
    return (
        <Wrapper>
            <NavTitle>Navigation Menu</NavTitle>
            <NavMenu>
                <Ul>
                    <Li>
                        <MenuItem item={PhoneMenuData.work} />
                    <Ul>
                        <Li>
                            <MenuItem item={PhoneMenuData.designProcess} />
                        </Li>
                        <Li>
                            <MenuItem item={PhoneMenuData.implementation} />
                        </Li>
                        <Li>
                            <MenuItem item={PhoneMenuData.designMetrics} />
                        </Li>
                    </Ul>
                    </Li>
                    <Li>
                        <MenuItem item={PhoneMenuData.interactiveProjects} />
                    </Li>
                    <Li>
                        <MenuItem item={PhoneMenuData.productDesign} />
                    </Li>
                    <Li>
                        <MenuItem item={PhoneMenuData.miniProjects} />
                    </Li>
                    <Li>
                        <MenuItem item={PhoneMenuData.about} />
                    </Li>
                    <Li>
                        <MenuItem item={PhoneMenuData.contact} />
                    </Li>
                </Ul>
            </NavMenu>
            <NavFooter>
            </NavFooter>
        </Wrapper>
    )
}

export const SiteMap = ({isBlack}) => {
    return (
        <SiteWrapper style={{color: isBlack ? 'black' : 'white'}}>
        <SiteTitle style={{borderBottom: `1px solid ${isBlack ? 'white' : 'black'}`}}>SiteMap</SiteTitle>
        <Ul>
            <Li><spand>Work</spand>
                <Ul>
                    <SubLi>Design process</SubLi>
                    <SubLi>Implementation</SubLi>
                    <SubLi>Design metrics</SubLi>
                </Ul>
            </Li>
            <Li>Interactive Projects</Li>
            <Li>Product Design</Li>
            <Li>Mini-projects</Li>
            <Li>About</Li>
            <Li>Contact</Li>
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
