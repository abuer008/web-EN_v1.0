import Menu from './Menu';
import styled from 'styled-components';
import Image from 'next/image';

const Layout = ({ children }) => {

    return (
        <Wrapper>
            <MainBackground>
                <Image src="/../public/bkg.png" layout="fill" objectFit="cover" />
            </MainBackground>
            <Menu />
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  height: 90vh;
`

const MainBackground = styled.div`
//display: block;
//  height: 100%;
  width: 80%;
z-index: -5;
pointer-events: none;
overflow: hidden;
`

export default Layout