import Menu from './Menu';
import styled from 'styled-components';

const Layout = ({ children, isBlack = true }) => {

    return (
        <Wrapper>
            <Menu isBlack={isBlack} />
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  // height: 0vh;
  //background: black;
  margin: -8px;
  //overflow-y: scroll;
`

export default Layout