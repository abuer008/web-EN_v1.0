import React from 'react'
import Layout from '../../components/Layout';
import styled from 'styled-components';
import NameSqure from "../../components/ProjectNameSqure";
import Image from "next/image";
import Link from "next/link"
import ProjectTextItem from "../../components/ProjectTextItem";

import {useState} from 'react';

import * as RevisionAnima from '../../public/revisionStartAnima.json';
import {projectsArray, interactionPageInfo} from "../../data/MainPageData";


function InteractiveProjects() {

    let [projectInfo, setProjectInfo] = useState({
        title: "",
        subTitle: "",
        explain: "",
        animaData: RevisionAnima,
        movePointer: 0
    })
    let [titleVisible, setVisible] = useState(false)


    const handleMouseEnter = (popProject) => {
        console.log("enter")

        setProjectInfo({
            title: popProject.title,
            subTitle: popProject.subTitle,
            explain: popProject.explain,
            animaData: popProject.animaData,
            movePointer: popProject.movePointer
        })
        setVisible(true)
    }

    const handleMouseLeave = () => {
        console.log("leave")
        setProjectInfo({
            title: "",
            subTitle: "",
            explain: "",
        })
        setVisible(false)
    }

    return (
        <Layout>
            <ProjectsSqures>
                <EnterArrow>
                    <EnterTonText>Enter</EnterTonText>
                    <EnterText>the Projects</EnterText>
                    <ArrowIcon>
                        <Image alt='small arrow icon' src="/Arrow.svg" width="57" height="48"/>
                    </ArrowIcon>
                </EnterArrow>
                {
                    projectsArray.map(project => {
                        return <NameSqure name={project.name}
                                          color={project.color}
                                          destination={project.destination}
                                          handleMouseEnter={handleMouseEnter}
                                          handleMouseLeave={handleMouseLeave}
                                          key={project.color}
                                          animaData={project.animaData}
                        />
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
            <WebsitePlain>&copy; 2021 Bowei Xiao All Rights Reserved. For more information about this portfolio
                please
                visit <Link href='/about'><a>about</a></Link>.</WebsitePlain>

        </Layout>
    )
}


const MainBackground = styled.div`
  //width: 100%;
  //height: 100%;
  //z-index: -5;
  //margin: -8px;
  //pointer-events: none;
  //overflow: hidden;
`

const AnimaSection = styled.div`
  position: absolute;
  bottom: 70%;
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

  @media all and (max-width: 1270px) {
    display: none;
  }

  pointer-events: none;
`

const EnterText = styled.h4`
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 50%;
  margin: 0;

  font-family: Roboto, sans-serif;
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
  max-width: 65%;
  position: relative;
  top: 72vh;
  left: 43.2%;
  transition: 0.3s;

  transform: translate(-50%, 0);

  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: center;

  @media all and (max-width: 1120px) {
    //align-items: center;
    justify-content: center;
    max-width: 100%;
    left: 47.7%;
    top: 55vh;
  }

  @media all and (max-width: 850px) {
    display: none;
  }
  
  @media all and (max-aspect-ratio: 16/10) {
    top: 65vh;
  }

`

const WebsitePlain = styled.p`
  position: absolute;
  bottom: 2vh;
  right: 25vw;
  width: 20vw;

  font-family: Roboto Condensed, sans-serif;
  font-style: normal;
  font-size: 0.8em;
  font-weight: bold;
  text-align: right;

  @media all and (max-height: 850px) {
    display: none;
  }

  @media all and (max-width: 1130px) {
    display: none;
  }
`

export default InteractiveProjects