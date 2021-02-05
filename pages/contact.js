import {useState, useRef} from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import styled from 'styled-components'
import {ContactIcon} from "../components/contact/ContactIcon";

const Contact = () => {
    const [visible, setVisible] = useState(false)
    const [copied, setCopy] = useState(false)
    const toolTip = useRef(null)
    const email = useRef(null)

    const handleCopy = e => {
        window.getSelection().removeAllRanges()
        let range = document.createRange()
        range.selectNode(email.current)
        window.getSelection().addRange(range)

        document.execCommand("copy")
        window.getSelection().removeAllRanges()

        setCopy(true)
    }

    return (
        <Layout>
            <TextWrapper>
                <Front>Any thoughts, comments, or regarding works</Front>
                <Middle>GET IN TOUCH</Middle>
                <ContactWrapper>
                    <ContactIcon content='email'/>
                    <ContactIcon content='linkedin'/>
                    <ContactIcon content='github'/>
                </ContactWrapper>
            </TextWrapper>
        </Layout>
    )
}


const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 35%;
`

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  line-height: 1vw;
`

const Front = styled.h4`
  font-weight: 300;
  font-size: 2vw;
  text-transform: uppercase;
  line-height: 1.5vw;
  margin: 0.7em auto;
`

const Middle = styled.h1`
  font-weight: 900;
  font-size: 4.5vw;
  line-height: 5vw;
  margin: auto;
`

const Bottom = styled.h6`
  font-weight: 900;
  font-size: 2em;
  margin: 1em auto;
  transition: 0.3s;

  :hover {
    color: blue;
  }
`


export default Contact;