import {useState, useRef, useEffect} from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import styled from 'styled-components'
import {ContactIcon} from "../components/contact/ContactIcon";
import { useSelector } from 'react-redux'
import { usePhoneVersion } from "../components/usePhoneVersion";

import { PhoneContact } from "../components/phoneComponents/PhoneContact";

const Contact = () => {
    const { language } = useSelector(state => state.language)
    const [isEnglish, setLanguage] = useState(true)
    const isPhoneVersion = usePhoneVersion()

    useEffect(() => {
        if(language === 'CN' && isPhoneVersion) {
            setLanguage(false)
        } else {
            setLanguage(true)
        }
    })

    return (
        <Layout>
            {isEnglish ? <StandardContact /> : <PhoneContact />}
        </Layout>
    )
}

const StandardContact = () => {
    // const [visible, setVisible] = useState(false)
    // const [copied, setCopy] = useState(false)
    // const toolTip = useRef(null)
    // const email = useRef(null)

    // const handleCopy = e => {
    //     window.getSelection().removeAllRanges()
    //     let range = document.createRange()
    //     range.selectNode(email.current)
    //     window.getSelection().addRange(range)
    //
    //     document.execCommand("copy")
    //     window.getSelection().removeAllRanges()
    //
    //     setCopy(true)
    // }


    return (
        <>
            <TextWrapper>
                <Front>Any thoughts, comments, or regarding works</Front>
                <Middle>GET IN TOUCH</Middle>
                {usePhoneVersion() ?
                    <Bottom>
                        x.bowei@aol.com
                    </Bottom>
                    :
                    <ContactWrapper>
                        <ContactIcon content='email'/>
                        <ContactIcon content='linkedin'/>
                        <ContactIcon content='github'/>
                    </ContactWrapper>
                }
            </TextWrapper>
        </>
    )
}


const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 60%;
`

const TextWrapper = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  line-height: 1vw;

  @media all and (max-width: 850px) {
    position: relative;
    top: 30vh;
    margin: 0 auto;
    padding: 0;
    width: 80%;
    height: 60vh;
    transform: translate(-60%, 0);
  }
`

const ImgWrapper = styled.div`
  width: 50%;
  height: 50vh;
  margin: 0 auto;
  position: relative;
  top: 20vh;
  max-width: 200px;
`

const Front = styled.h4`
  font-weight: 300;
  font-size: 2vw;
  text-transform: uppercase;
  line-height: 1.5vw;
  margin: 0.7em auto;

  @media all and (max-width: 850px) {
    font-size: 1.4em;
    line-height: 1em;
  }
`

const Middle = styled.h1`
  font-weight: 900;
  font-size: 4.5vw;
  line-height: 5vw;
  margin: auto;

  @media all and (max-width: 850px) {
    font-size: 2.4em;
    line-height: 1em;
  }
`


const Bottom = styled.h6`
  font-weight: 600;
  font-size: 1.4em;
  margin: 1em auto;
  transition: 0.3s;

  :hover {
    color: blue;
  }
`


export default Contact;