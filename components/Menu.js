import styled from 'styled-components';
import Link from 'next/link';
import {menuList} from '../data/MainPageData';
import {PhoneMenu} from "./phoneComponents/PhoneMenu";
import Image from 'next/image';
import {useState, useEffect, useRef} from 'react'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Menu({isBlack, phoneVersion, showMenu, handleShowMenu}) {

    const [event, setEvent] = useState(true)
    const [showing, setShowMenu] = useState(false)
    const [touching, setTouching] = useState(false)
    const [scrolling, setScroll] = useState(false)

    const trigger = useRef(null)
    const menuItems = useRef([])
    const img = useRef(null)

    const handleNav = () => {
        ScrollTrigger.create({
            start: 'top -80',
            end: 999999,
            onUpdate: (self) => {
                self.direction === 1 ? setScroll(true) : setScroll(false)
            }
        })
    }

    const handleTouchStart = () => {
        setTouching(true)
    }

    const handleTouchEnd = () => {
        setTouching(false)
    }

    useEffect(() => {
        if (!phoneVersion) {
            handleNav()
        }
    }, [])

    return (
        <>
            {phoneVersion ?
                <div>
                    <PhoneMenuWrapper>
                        <Link href='/work'>
                            <ImgWrapper onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{transform: `scale(${touching ? '0.95' : '1'})`}}>
                                <Image src={isBlack ? '/phoneLogo.black.png' : '/phoneLogo.white.png'}
                                       width='46'
                                       height='20'/>
                            </ImgWrapper>
                        </Link>
                        <ImgWrapper onClick={handleShowMenu}>
                            <Image src={isBlack ? '/hamburger_black.png' : '/hamburger_white.png'} width='32'
                                   height='32'/>
                        </ImgWrapper>
                    </PhoneMenuWrapper>
                    {showMenu && <PhoneMenu/>}
                </div>
                :
                <MenuWrapper isBlack={isBlack} ref={trigger} scrolling={scrolling}>
                    <Link href='/'>
                        <MenuHeading>Bowei</MenuHeading>
                    </Link>
                    <MenuItems>
                        <Link href='/work'>
                            <Item>UXD</Item>
                        </Link>
                        <Link href='/interactive-projects'>
                            <Item>IxD</Item>
                        </Link>
                        <Link href='/about'>
                            <Item>About</Item>
                        </Link>
                    </MenuItems>
                </MenuWrapper>
            }
        </>
    )
}

const MenuItems = styled.div`
    display: flex;
  flex-direction: row;
  width: 30vw;
`

const Item = styled.h6`
    font-size: 1rem;
  width: 120px;
  transition: 0.5s;
  :hover {
    cursor: pointer;
    color: #007BFF;
  }
`

const MenuHeading = styled.h6`
  width: 240px;
    font-size: 1.2rem;
  margin: 0;
  cursor: pointer;
  transition: 1s;
  :hover {
    cursor: pointer;
    color: #007BFF;
  }
`

const MenuItemActive = styled.a`
  width: 80px;
  text-align: left;
  text-decoration: none;

  :hover {
    cursor: pointer;
    font-weight: 900;
  }

  @media all and (max-width: 850px) {
    display: none;
  }
`

const ImgWrapper = styled.div`
  transition: 0.3s;
  //:hover {
  //  transform: scale(0.8);
  //  cursor: pointer;
  //}
`

const PhoneMenuWrapper = styled.div`
  position: fixed;
  z-index: 3;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  padding-top: 32px;

  left: 50%;
  transform: translate(-50%, 0)
`

const MenuWrapper = styled.div`
  width: 100%;
  //max-width: 56vw;
  //left: 22%;
  position: fixed;
  padding-top: ${props => props.scrolling ? '0rem' : '1.4rem'};
  transition: 0.3s;
  z-index: 1000;
  color: ${props => props.isBlack ? 'black' : 'white'};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 14px;
  text-align: center;

`

export default Menu