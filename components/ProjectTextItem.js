import styled from "styled-components";
import useMousePosition from "../utils/useMousePosition";
import {useState, useEffect} from 'react';

import {interactionPageInfo} from "../data/MainPageData";

const ProjectTextItem = ({title, subTitle, explain, displayClass}) => {

    let [windowsWidth, setWindowsWidth] = useState(null)
    let [windowsHeight, setWindowsHeight] = useState(null)

    const {x, y} = useMousePosition()

    useEffect(() => {
        setWindowsWidth(window.innerWidth)
        setWindowsHeight(window.innerHeight)
    }, [])
    const perX = (x / windowsWidth).toFixed(2)
    const perY = (y / windowsHeight).toFixed(2)

    const convertX = (perY < 0.6 && perY >= 0.15) ? -(perX - 0.5) * 20 : 0
    const convertY = (perY < 0.6 && perY >= 0.15) ? (perY - 0.35) * 50 : 0

    return (
        <TextArea>
            <MainTitle degX={convertY} degY={convertX} className={displayClass} style={
                title === interactionPageInfo.title ?
                    {
                        fontSize: "6vw",
                        lineHeight: "0.8em"
                    }
                    :
                    {
                        fontSize: "3.2vw",
                        lineHeight: '1em'
                    }
            }>{title}</MainTitle>
            <Warning>Please <strong>REFRESH</strong> the page</Warning>
            <MainSubTitle className={displayClass}>{subTitle}</MainSubTitle>
            <MainText>{explain}</MainText>
        </TextArea>
    )
}


const TextArea = styled.div`
  height: 600px;
  width: 50vw;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 50%;
  top: 40%;

  transform: translate(-50%, -50%);

  transition: opacity 1s ease;

  .fadeOut {
    opacity: 1;
    animation: fadeOut 1s ease;;

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  .fadeIn {
    animation: fadeIn 1s ease;

    @keyframes fadeIn {
      0% {
        opacity: 0;
        filter: blur(3px);
        visibility: hidden;
      }
      100% {
        opacity: 1;
        filter: blur(0)
      }
    }
  }

  @media all and (max-width: 1400px) {
    width: 70vw;
    height: 40vw;
    top: 40%;
    left: 60%;
  }

  @media all and (max-height: 900px) {
    top: 35%;
    height: 50%;
  }

  @media all and (max-width: 850px) {
    //top: 40%;
    left: 50%;
    width: 85%;
  }
`

const MainTitle = styled.h1.attrs(props => ({
    style: {
        transform: `rotateX(${props.degX}deg) rotateY(${props.degY}deg)`,
    }
}))`
  width: 100%;
  margin: 0;
  padding-top: 10vh;

  font-family: Roboto, sans-serif;
  font-weight: 900;
  text-transform: uppercase;


  transition: text-shadow .5s;

  @media all and (max-height: 680px) {
    display: none;
  }

  @media all and (max-width: 850px) {
    display: none;
  }

`


const MainSubTitle = styled(MainTitle)`
  font-size: 2.4vw;
  font-weight: lighter;
  padding: 0;
  margin: auto;
  width: 100%;

  @media all and (min-aspect-ratio: 24/11) {
    display: none;
  }
`

const Warning = styled(MainSubTitle)`
  display: none;
  font-weight: normal;
  font-size: 2.2em;
  @media all and (max-width: 850px) {
    display: block;
  }
  
  @media all and (max-height: 650px) {
    display: block;
    position: absolute;
    top: 40%;
  }
`

const MainText = styled.p`
  z-index: 1;
  width: 100%;
  margin: 1em auto;
  font-weight: 300;
  font-size: 1.7rem;
  line-height: 1.2em;

  .fadeOut {
    opacity: 0;
  }

  @media all and (min-aspect-ratio: 24/11) {
    display: none;
  }
`

export default ProjectTextItem