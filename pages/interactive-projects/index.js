import Layout from '../../components/Layout';
import styled from 'styled-components';
import NameSqure from "../../components/ProjectNameSqure";
import Image from "next/image";
import useMousePosition from "../../components/useMousePosition";
import ProjectTextItem from "../../components/ProjectTextItem";

import { useState, useEffect } from 'react';

const projectsArray = [{
    name: "Re:Vision",
    color: 0,
    destination: "/revision",
    title: "I. Re:Vision",
    subTitle: "The Introduction of Interaction",
    explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti orci sit fusce neque, id egestas quis quisque nisl. Volutpat pellentesque sed fermentum mi scelerisque orci. Mi sem vitae nibh eget quis pellentesque in mauris."
}, {
    name: "Visual\nData",
    color: 1,
    destination: "/data-visualisation",
    title: "II. The Syrian Civil War",
    subTitle: "Interface based on amounts of data",
    explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti orci sit fusce neque, id egestas quis quisque nisl."
}, {
    name: "Super\nHuman",
    color: 2,
    destination: "/super-human",
    title: "III. Super Human",
    subTitle: "Speculative Design, The discuss of future Human Computer Interaction.",
    explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti orci sit fusce neque, id egestas quis quisque nisl."
}, {
    name: "Ambient Assisted Living",
    color: 3,
    destination: "/aal",
    title: "IV. Ambient Assisted Living",
    subTitle: "Part I. The implementation of future HCI.",
    explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti orci sit fusce neque, id egestas quis quisque nisl."
}, {
    name: "Virtual Kinship",
    color: 4,
    destination: "/connecting",
    title: "V. Connecting",
    subTitle: "Part II. Rethinking of future connectivity of individuals.",
    explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti orci sit fusce neque, id egestas quis quisque nisl."
}]

function InteractiveProjects() {

    let [projectInfo, setProjectInfo] = useState({title: "", subTitle: "", explain: ""})
    let [titleVisible, setVisible] = useState(false)

    const handleMouseEnter = (e) => {
        console.log(e.target.innerHTML)
        const popProject = projectsArray.find(project => project.name === e.target.innerHTML) || {}

        setProjectInfo({title: popProject.title, subTitle: popProject.subTitle, explain: popProject.explain})
        setVisible(true)
    }

    const handleMouseLeave = () => {
        console.log("leave")
        setProjectInfo({title: "", subTitle: "", explain: ""})
        setVisible(false)
    }

    return (
        <Layout>
            <ProjectTextItem title={projectInfo.title}
                             subTitle={projectInfo.subTitle}
                             explain={projectInfo.explain}
                             displayClass={titleVisible ? "fadeIn" : "fadeOut"}
            />
            {!titleVisible && <ProjectTextItem title="The Attitude towards Interactive Design."
                             subTitle=""
                             explain=""
                             displayClass={titleVisible ? "fadeOut" : "fadeIn"}
            />}
            <ProjectsSqures>
                <EnterArrow>
                    <EnterTonText>Enter</EnterTonText>
                    <EnterText>the Projects</EnterText>
                    <ArrowIcon>
                        <Image src="/../public/Arrow.svg" width="57" height="48" />
                    </ArrowIcon>
                </EnterArrow>
                {
                projectsArray.map(project => {
                    return <NameSqure name={project.name} color={project.color} destination={project.destination} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} key={project.color} />
                })
            }
            </ProjectsSqures>
        </Layout>
    )
}


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
top: 65vh;
left: 10%;
//right: 0;
//bottom: -50vh;

  display: flex;
  flex-flow: row;
  //grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  //column-gap: 50px;
  //row-gap: 20px;
  justify-content: space-around;
  align-items: flex-end;
  //align-content: ;
  //margin: 0;
  //@media all and (max-width: 800px) {
  //justify-content: flex-end;
  //}
  
`

export default InteractiveProjects