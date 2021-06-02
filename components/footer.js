import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from "next/router";
import {Tween} from 'react-gsap';
import {IxDfooterData, UXDfooterData} from "../data/footerData";

export const Footer = ({UX}) => {
    return (
        <Wrapper>
            <HorizontalWrapper>
                <ProjectsWrapper UX={UX}>
                    <Title>{UX ? 'UX Design:' : 'Innovate IxD:'}</Title>
                    { UX ?
                        UXDfooterData.map((item, i) => {
                            return <Rect key={i} item={item} />
                        })
                        :
                        IxDfooterData.map((item, i) => {
                            return <Rect key={1} item={item} />
                        })
                    }
                </ProjectsWrapper>
                <Link href={UX ? '/interactive-projects' : '/work'}>
                <Heading>{UX ? 'Innovate HMI.' : 'UXD.'}</Heading>
                </Link>
            </HorizontalWrapper>
        </Wrapper>
    )
}

const Title = styled.h3`
    margin: 0;
  //padding: 0 1rem;
  width: 120px;
  
`

const Rect = ({item}) => {
    const router = useRouter();

    return (
        <Link href={item.link}>
        <RectWrapper isActive={router.asPath === item.link}>
            <H1>{item.name}</H1>
        </RectWrapper>
        </Link>
    )
}

const RectWrapper = styled.div`
    width: 120px;
  height: 120px;
  transition: 0.5s;
  
  :hover {
    cursor: pointer;
    background-color: #007BFF;
  }
  
  background-color: ${props => props.isActive ? '#007BFF' : '#343A40'};
`

const H1 = styled.h2`
    margin: 1rem;
`

const ProjectsWrapper = styled.div`
    display: flex;
  flex-direction: row;
  width: ${props => props.UX ? '40vw' : '60vw'};
  justify-content: space-around;
`

const Heading = styled.h1`
    font-size: 3.5rem;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: #007BFF;
  }
`

const B = ({link, name}) => (
    <Link href={link}>
        <P>{name}</P>
    </Link>
)

const Break = () => (
    <BreakWrapper>
        <P>Copyright &copy; 2021 boweisdesign.com</P>
    </BreakWrapper>
)

const P = styled.p`
  //height: 50%;
    margin: 0.7rem 0;
  padding: 0;
  :hover {
    cursor: pointer;
  }
`


const PS = styled(P)`
    font-weight: 900;
`

const Wrapper = styled.div`
  z-index: 1000;
  height: 350px;
  width: 100%;
  background-color: #343A40;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
    //background-color: #333;
`

const VerticalWrapper = styled.div`
  //color: white;
  margin: auto;
  width: 60%;
`

const HorizontalWrapper = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  
  color: white;
`

const ListWrapper = styled.div`
    display: flex;
  flex-direction: column;
  padding: 50px 50px;
  //align-items: flex-start;
  justify-content: flex-start;
`

const BreakWrapper = styled.div`
    border-top: 1px solid white;
  height: 5vh;
`