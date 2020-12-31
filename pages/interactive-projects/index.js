import React from 'react'
import Layout from '../../components/Layout';
import styled from 'styled-components';
import NameSqure from "../../components/ProjectNameSqure";
import Image from "next/image";
import ProjectTextItem from "../../components/ProjectTextItem";

import { useState } from 'react';
import StartAnima from "../../components/StartAnima";

import * as RevisionAnima from '../../public/revisionStartAnima.json';
import { projectsArray, interactionPageInfo } from "../../data/MainPageData";


function InteractiveProjects() {

    let [projectInfo, setProjectInfo] = useState({title: "", subTitle: "", explain: "", animaData: RevisionAnima, movePointer: 0})
    let [titleVisible, setVisible] = useState(false)
    let [isStopped, setStopped] = useState(true)
    let [direction, setDirection] = useState(1)
    let [speed, setSpeed] = useState(1)

    let [cachedPointer, setPointer] = useState("0%")
    let [cachedAnima, setAnima] = useState(RevisionAnima)


    const handleMouseEnter = (e) => {
        console.log("enter")
        const popProject = projectsArray.find(project => project.name === e.target.innerHTML) || {}

        setProjectInfo({
            title: popProject.title,
            subTitle: popProject.subTitle,
            explain: popProject.explain,
            animaData: popProject.animaData,
            movePointer: popProject.movePointer
        })

        setPointer(popProject.movePointer)
        setAnima(popProject.animaData)

        setVisible(true)
        setStopped(false)
        setDirection(1)
        setSpeed(1)
    }

    const handleMouseLeave = () => {
        console.log("leave")
        setProjectInfo({
            title: "",
            subTitle: "",
            explain: "",
            animaData: cachedAnima,
            movePointer: cachedPointer})
        setVisible(false)
        setDirection(-1)
        setSpeed(2)
    }

    return (
        <Layout>
            <MainBackground>
                <Image src="/bkg.png" layout="fill" objectFit="cover" />
            </MainBackground>
            <ProjectsSqures>
                <EnterArrow>
                    <EnterTonText>Enter</EnterTonText>
                    <EnterText>the Projects</EnterText>
                    <ArrowIcon>
                        <Image src="/Arrow.svg" width="57" height="48" />
                    </ArrowIcon>
                </EnterArrow>
                <AnimaSection movePointer={projectInfo.movePointer}>
                    <StartAnima animaData={projectInfo.animaData}
                                direction={direction}
                                isStopped={isStopped}
                                speed={speed}
                                movePointer={projectInfo.movePointer}
                    />
                </AnimaSection>
                {
                    projectsArray.map(project => {
                        return <NameSqure name={project.name}
                                          color={project.color}
                                          destination={project.destination}
                                          handleMouseEnter={handleMouseEnter}
                                          handleMouseLeave={handleMouseLeave}
                                          key={project.color} />
                    })
                }
            </ProjectsSqures>
            <ProjectTextItem title={projectInfo.title}
                             subTitle={projectInfo.subTitle}
                             explain={projectInfo.explain}
                             displayClass={titleVisible ? "fadeIn" : "fadeOut"}
            />
            {!titleVisible && <ProjectTextItem title={interactionPageInfo.title}
                             subTitle={interactionPageInfo.subTitle}
                             explain={interactionPageInfo.explain}
                             displayClass={titleVisible ? "fadeOut" : "fadeIn"}
            />}
        </Layout>
    )
}


const MainBackground = styled.div`
//display: block;
//  height: 100%;
  width: 80%;
z-index: -5;
margin: -8px;
pointer-events: none;
overflow: hidden;
`

const AnimaSection = styled.div`
position: absolute;
bottom: 70%;
left: ${props => props.movePointer};
z-index: 0;

pointer-events: none;
`

const EnterArrow = styled.div`
  height: 140px;
  width: 156px;
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
  align-items: flex-end;
  
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0;
  
  @media all and (max-width: 800px) {
  display: none;
  }
  
  pointer-events: none;
`

const EnterText = styled.h4`
  position: relative;
left: 0%;
right: 0%;
top: 0%;
bottom: 50%;
margin: 0;

font-family: Roboto,sans-serif;
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 28px;
text-align: right;
text-transform: uppercase;

color: #000000;
`

const EnterTonText = styled(EnterText)`

font-weight: 900;
font-size: 30px;
line-height: 35px;
`

const ArrowIcon = styled.div`
  padding-top: 20px;
`

const ProjectsSqures = styled.div`
max-width: 70%;
position: relative;
top: 72vh;
left: 10%;

  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: flex-end;
  
`

export default InteractiveProjects