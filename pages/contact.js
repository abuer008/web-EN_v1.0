import { useState, useRef } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import styled from 'styled-components'

const Contact = () => {
    const [ visible, setVisible ] = useState(false)
    const [ copied, setCopy ] = useState(false)
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
                <Bottom
                    onMouseEnter={() => setVisible(true)}
                    onMouseLeave={() => {
                        setVisible(false)
                        setCopy(false)
                    }}
                    onClick={handleCopy}
                    ref={email}
                >x.bowei@aol.com</Bottom>
                <ToolTip style={{visibility: visible ? 'visible' : 'hidden', opacity: visible ? 1 : 0, backgroundColor: copied ? '#4caf50' : '#aaa'}} ref={toolTip}>{copied ? "Success copied!" : "Copy to Clipboard"}</ToolTip>
            </TextWrapper>
        </Layout>
    )
}

const Background = styled.div``

const TextWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
  
  transform: translate(-50%, -50%);
  
    line-height: 1em;
`

const Front = styled.h4`
    font-weight: 300;
    font-size: 2em;
    text-transform: uppercase;
  line-height: 1em;
  margin: 0.7em auto;
`

const Middle = styled.h1`
    font-weight: 900;
    font-size: 5em;
  line-height: 1em;
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

const ToolTip = styled.span`
    position: relative;
  display: inline-block;
  text-align: center;
  width: 140px;
  z-index: 1;
  background-color: #aaa;
  color: white;
  border-radius: 7px;
  padding: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  
  transition: opacity 0.3s;
`

export default Contact;