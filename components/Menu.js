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

    const trigger = useRef(null)
    const menuItems = useRef([])
    const img = useRef(null)

    const handleDisplay = () => {

        const hideNav = gsap.timeline({duration: 0.4, paused: true})
            .to(menuItems.current.reverse(), {
                x: '-=100',
                opacity: 0,
                pointerEvents: 'none',
                stagger: 0.1,
                ease: 'power2.in',
            }).progress(0)
            .to(img.current, {
                scale: 1.2,
                ease: 'elastic.out(1.2, 0.45)'
            }, '-=0.1').progress(0)

        ScrollTrigger.create({
            start: 'top -=10%',
            end: 999999,
            onUpdate: (self) => {
                self.direction === 1 ? hideNav.play() : hideNav.reverse()
            }
        })
    }

    const handlePopup = () => {
        showing ? setShowMenu(false) : setShowMenu(true)
        showing ? handleShowMenu(true) : handleShowMenu(false)
    }

    const handleTouchStart = () => {
        setTouching(true)
    }

    const handleTouchEnd = () => {
        setTouching(false)
    }

    useEffect(() => {
        if (!phoneVersion) {
            handleDisplay()
        }
    }, [])

    return (
        <>
            {phoneVersion ?
                <div>
                    <PhoneMenuWrapper>
                        <Link href='/works'>
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
                <MenuWrapper ref={trigger}>
                    <Link href='/interactive-projects'>
                        <ImgWrapper ref={img}>
                            <Image src={isBlack ? '/safari-pinned-tab.svg' : '/safari-pinned-tab_white.svg'} width='16'
                                   height='16'/>
                        </ImgWrapper>
                    </Link>
                    {menuList.map(menuItem => {
                        return <Link href={menuItem.destination} key={menuItem.id}>
                            <MenuItemActive
                                style={{color: isBlack ? 'black' : 'white', pointerEvents: event ? 'default' : 'none'}}
                                ref={el => menuItems.current.push(el)}>{menuItem.title}</MenuItemActive>
                        </Link>
                    })}
                </MenuWrapper>
            }
        </>
    )
}

const MenuItemActive = styled.a`
  width: 80px;
  text-align: left;

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
  max-width: 56vw;
  left: 22%;
  position: fixed;
  padding-top: 4em;
  z-index: 3;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 14px;
  text-align: center;

`

export default Menu