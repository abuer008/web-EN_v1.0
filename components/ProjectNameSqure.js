import styled from 'styled-components'
import Link from 'next/link'
import {useState} from 'react'

import {colorSqureArray} from "../data/MainPageData";
import {projectsArray} from "../data/MainPageData";
import StartAnima from "./StartAnima";

const NameSqure = ({name, color, destination, handleMouseEnter, handleMouseLeave}) => {

    const [isStopped, setStopped] = useState(true)
    const [direction, setDirection] = useState(1)
    const [speed, setSpeed] = useState(1)
    const [animaData, setAnimation] = useState({})

    const handleHoverIn = e => {
        const hoveredProject = projectsArray.find(item =>
            item.name === name
        ) || {}

        handleMouseEnter(hoveredProject)

        setAnimation(hoveredProject.animaData)
        setStopped(false)
        setDirection(1)
        setSpeed(1)
    }

    const handleHoverOut = e => {
        handleMouseLeave()
        setDirection(-1)
        setSpeed(2)
    }

    return (
        <Wrapper>
            <Link href={destination} >
                <Title color={colorSqureArray[color]} onMouseEnter={handleHoverIn}
                       onMouseLeave={handleHoverOut}>{name}</Title>
            </Link>
            <AnimaSection>
                <StartAnima
                    animaData={animaData}
                    direction={direction}
                    isStopped={isStopped}
                    speed={speed}
                />
            </AnimaSection>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: inherit;
  height: 150px;
  width: 150px;

`


const Title = styled.h3`
  position: relative;
  height: 150px;
  width: 150px;
  z-index: 1;

  font-weight: 900;
  font-size: 24px;
  line-height: 28px;

  display: flex;
  align-items: flex-end;
  text-align: right;
  text-transform: uppercase;

  color: #FFF;
  background-color: ${props => props.color};


  /* Inside Auto Layout */

  flex: auto;
  order: 5;
  flex-grow: 1;
  margin: auto 1em;
  transition: transform .2s;


  :hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`

const AnimaSection = styled.div`
  position: absolute;
  bottom: 70%;
  z-index: 0;
  left: -219%;
`


export default NameSqure