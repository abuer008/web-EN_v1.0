import styled from 'styled-components'
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react'

export const ContactIcon = ({content}) => {
    const [imgUrl, setImgUrl] = useState('/contact/emailIcon.svg')
    const [visible, setVisible] = useState(false)
    const [copied, setCopy] = useState(false)
    const [floatText, setFloatText] = useState('')

    const toolTip = useRef(null)

    const handleClick = () => {
        if (content === 'email') {
            const email = 'x.bowei@aol.com'

            if (!navigator.clipboard) {
                return setFloatText(email)
            }

            navigator.clipboard.writeText(email)
                .then(() => {
                    setCopy(true)
                    setFloatText("Success copied!")
                })
                .catch(err => {
                    console.log("Something went wrong", err)
                })
        } else if (content === 'linkedin') {
            window.open('https://linkedin.com/in/bowie-xiao-b39389100')
        } else {
            window.open('https://github.com/abuer008?tab=repositories')
        }
    }

    const handleMouseEnter = () => {
        setVisible(true)

        if (content === 'email') {
            setFloatText('copy email to clipboard')
        } else if (content === 'linkedin') {
            setFloatText('redirect to linkedin')
        } else {
            setFloatText('redirect to github')
        }
    }

    const handleMouseLeave = () => {
        setVisible(false)
        setCopy(false)
    }

    useEffect(() => {
        if (content === 'email') {
            setImgUrl('/contact/emailIcon.svg')
        } else if (content === 'linkedin') {
            setImgUrl('/contact/linkedinIcon.svg')
        } else {
            setImgUrl('/contact/githubIcon.svg')
        }
    }, [])

    return (
        <Wrapper>
            <ImgWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                <Image src={imgUrl} width='71' height='65'/>
            </ImgWrapper>
            {visible ? <ToolTip style={{
                visibility: visible ? 'visible' : 'hidden',
                opacity: visible ? 1 : 0,
                backgroundColor: copied ? '#4caf50' : '#aaa'
            }} ref={toolTip}>{floatText}</ToolTip> : <Text>{content}</Text>}

        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 0;

  align-items: center;
`

const ImgWrapper = styled.div`
  border-radius: 21px;
  transition: 0.3s;

  :hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25)
  }
`

const Text = styled.p`
  font-family: Roboto Condensed, sans-serif;
  font-size: 1.1em;
  margin: 10px auto;

`

const ToolTip = styled.span`
  position: absolute;
  display: inline-block;
  text-align: center;
  width: 140px;
  top: 25vh;
  z-index: 1;
  background-color: #aaa;
  color: white;
  border-radius: 7px;
  padding: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  transition: opacity 0.3s;
`
