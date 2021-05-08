import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from "next/router";

import { useState, useEffect } from 'react'

import {PhoneMenuData} from "../../data/MenuData";
import { useDispatch, useSelector } from 'react-redux';
import { switchLanguage } from '../../store/actions/switchAction';

const MenuItem = ({item, translate = false, href}) => {
    const router = useRouter()
    const {language} = useSelector(state => state.language)

    return (
        <>
            <ActiveBar style={{opacity: router.asPath === item.link ? '1' : '0'}}/>
            <Link href={item.link}>
            <ItemWrapper>
                <IconWrapper>
                    <Image src={item.iconSrc} width={item.width} height={item.height}/>
                </IconWrapper>
                <Span>{ language === 'CN' ? item.CNname : item.name}</Span>
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
                <SwitchLanguage />
            </NavFooter>
        </Wrapper>
    )
}

const SiteMapItem = ({link, children}) => (
    <Link href={link}>
        {children}
    </Link>
)

const SwitchLanguage = ({isBlack = false}) => {
    const dispatch = useDispatch()
    const {language} = useSelector(state => state.language)
    const [isEnglish, setIsEnglish] = useState(true)
    const [scale, setScale] = useState(1)

    const handleClick = async () => {
        setIsEnglish(!isEnglish)
        dispatch(switchLanguage(isEnglish))
    }

    const handleTouchStart = () => {
        setScale(0.9)
        setIsEnglish(!isEnglish)
        dispatch(switchLanguage(isEnglish))
    }

    const handleTouchEnd = () => {
        setScale(1)
    }

    useEffect(() => {
        if (language === 'EN') {
            setIsEnglish(true)
        } else {
            setIsEnglish(false)
        }
    }, [])

    return (
        <TranslateWrapper onTouchStart={handleClick} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{transform: `scale(${scale})`}}>
            <IconWrapper>
                <Image alt='globe icon' src={isBlack ? '/Translate.Icon.png' : '/Translate.Icon.white.png'} width='36' height='36' />
            </IconWrapper>
            <Span style={{color: isBlack ? 'black' : 'white'}}><La style={{fontWeight: isEnglish ? '900' : 'normal' }}>EN</La>/<La style={{fontWeight: isEnglish ? 'normal' : '900'}}>CN</La></Span>
        </TranslateWrapper>
    )
}

export const SiteMap = ({isBlack}) => {
    const {language} = useSelector(state => state.language)
    const [isEnglish, setIsEnglish] = useState(language === 'EN')

    useEffect(() => {
        language === 'CN' ? setIsEnglish(false) : setIsEnglish(true)
    })

    return (
        <SiteWrapper style={{color: isBlack ? 'black' : 'white'}}>
            <Break style={{borderColor: isBlack ? 'black' : 'white'}}/>
            <SiteTitle>{isEnglish ? 'Site map' : '网站地图'}</SiteTitle>
            <Ul>
                <Li>
                    <span>{isEnglish ? 'Work' : '工作流'}</span>
                    <Ul>
                        <SiteMapItem link={PhoneMenuData.designProcess.link}>
                            <SubLi>{isEnglish ? 'Design process' : '设计流程'}</SubLi>
                        </SiteMapItem>
                        <SiteMapItem link={PhoneMenuData.implementation.link}>
                        <SubLi>{isEnglish ? 'Implementation' : '技术实现'}</SubLi>
                        </SiteMapItem>
                        <SiteMapItem link={PhoneMenuData.designMetrics.link}>
                        <SubLi>{isEnglish ? 'Design metrics' : '产品反馈'}</SubLi>
                        </SiteMapItem>
                    </Ul>
                </Li>
                <SiteMapItem link={PhoneMenuData.interactiveProjects.link}>
                <Li>{isEnglish ? 'Interactive projects' : '交互设计'}</Li>
                </SiteMapItem>
                <SiteMapItem link={PhoneMenuData.productDesign.link}>
                <Li>{isEnglish ? 'Product design' : '产品设计'}</Li>
                </SiteMapItem>
                <SiteMapItem link={PhoneMenuData.miniProjects.link}>
                <Li>{isEnglish ? 'Mini projects' : '其他'}</Li>
                </SiteMapItem>
                <SiteMapItem link={PhoneMenuData.about.link}>
                <Li>{isEnglish ? 'About' : '关于'}</Li>
                </SiteMapItem>
                <SiteMapItem link={PhoneMenuData.contact.link}>
                <Li>{isEnglish ? 'Contact' : '联系我们'}</Li>
                </SiteMapItem>
            </Ul>
            <SwitchLanguage isBlack={isBlack} />
        </SiteWrapper>
    )
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 20px;
`

const IconWrapper = styled.div`
  margin-right: 0.7em;
`

const TranslateWrapper = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    transform-origin: left center;

    transition: 0.3s;
`

const Span = styled.span`
    display: flex;
    flex-direction: row;

    align-items: center;
    font-weight: bold;
`

const La = styled.p`
    transition: 0.1s;
`

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
  /* height: 31em; */
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
  padding: 0 1em;
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
