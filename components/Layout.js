import Menu from './Menu';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import React from 'react'
import {SiteMap} from "./phoneComponents/PhoneMenu";
import {usePhoneVersion} from "./usePhoneVersion";

const Layout = ({children, isBlack = true, backgroundColor = '#fff', pixel = '33px', backgroundPixel = '35px', overwrite = false}) => {

    const [show, setShow] = useState(false)
    const phoneVersion = usePhoneVersion()


    return (
        <Wrapper style={{backgroundColor: isBlack ? 'white' : 'black'}}>
            <Menu isBlack={isBlack} phoneVersion={phoneVersion} showMenu={show} handleShowMenu={() => setShow(!show)}/>
            {show && <Cover onClick={() => setShow(false)} />}
            {children}
            {phoneVersion && <div>
            <SiteMap isBlack={isBlack} />
            <footer style={{backgroundColor: isBlack ? 'black' : 'white', height: '4em'}}>
                <p style={{color: isBlack ? 'white' : 'black', fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'center', paddingTop: '0.5em'}}>&copy; 2021 Boweisdesign.com All Right Reserved</p>
            </footer>
            </div>}
            <style jsx global>{`
  
              body {
              background: linear-gradient(90deg, ${backgroundColor} ${pixel}, transparent 1%) right,
              linear-gradient(${backgroundColor} ${pixel}, transparent 1%) center,
              #999;
              background-size: ${backgroundPixel} ${backgroundPixel};
                background: ${overwrite ? backgroundColor : ''};
              
              font-family: Roboto, sans-serif;
              font-style: normal;


              }
              
              h4 {
                font-size: 1.2em;
              }
              
              .roundImage {
                border-radius: 5%;
              }
            `}</style>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   height: 0;
  //background: black;
  margin: -8px;
  //overflow-y: scroll;
`

const Cover = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin: auto;
  padding: 0;
  z-index: 2;
  
  transition: 0.3s;
  
    background-color: rgba(100, 100, 100, 0.2);
  backdrop-filter: blur(5px);
`


export default Layout