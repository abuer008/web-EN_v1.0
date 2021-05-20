import styled from 'styled-components'
import Link from 'next/link'

export const Footer = () => {
    return (
        <Wrapper>
        <VerticalWrapper>
            <HorizontalWrapper>
                <ListWrapper>
                    <PS>Site Map</PS>
                    <B link='/' name='Home' />
                    <B link='/work' name='Work' />
                    <B link='/interactive-projects' name='Interaction design' />
                    <B link='/product-projects' name='Product design' />
                    <B link='/minor-projects' name='Mini projects' />
                    <B link='/about' name='About' />
                    <B link='/contact' name='Contact' />
                </ListWrapper>

                <ListWrapper>
                    <PS>UX Projects</PS>
                    <B link='/work/SDP' name='Bonus Distribution Platform' />
                    <B link='/interactive-projects/revision' name='Re:Vision' />
                    <B link='/interactive-projects/data-visualisation' name='Syrian civil war' />
                    <B link='/interactive-projects/super-human' name='SuperHuman' />
                    <B link='/interactive-projects/pflegemangel' name='Pflegemangel case study' />
                    <B link='/interactive-projects/aal' name='Ambient assisted living' />
                    <B link='/interactive-projects/connecting' name='Connecting - Virtual kinship' />
                </ListWrapper>

                <ListWrapper>
                    <PS>Product Design</PS>
                    <PS>Mini-Projects</PS>
                    <P></P>
                </ListWrapper>
            </HorizontalWrapper>
            <Break />
        </VerticalWrapper>
        </Wrapper>
    )
}

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
  height: 50%;
    margin: auto 0;
  padding: 10px 0;
  :hover {
    cursor: pointer;
  }
`


const PS = styled(P)`
    font-weight: 900;
`

const Wrapper = styled.div`
    background-color: #333;
`

const VerticalWrapper = styled.div`
  color: white;
  margin: auto;
  width: 60%;
`

const HorizontalWrapper = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const ListWrapper = styled.div`
    display: flex;
  flex-direction: column;
  padding: 50px 50px;
  //align-items: flex-start;
  //justify-content: flex-start;
`

const BreakWrapper = styled.div`
    border-top: 1px solid white;
  height: 5vh;
`