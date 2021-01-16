import Menu from './Menu';
import styled from 'styled-components';
import Image from 'next/image';

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
`


export default Layout