import {Content} from "./Content";
import styled from 'styled-components'

export const ContentsList = ({contentsData, listTitle = '', show = true}) => {
    return (
        <ListWrapper>
            {show &&
            <TextWrapper>
                <OfferH3>We are offering</OfferH3>
                <SectionText>{listTitle}</SectionText>
            </TextWrapper>
            }
            {
                Object.entries(contentsData).map(([key, value]) =>
                    <Content key={key} contentData={value}/>
                )
            }
        </ListWrapper>
    )
}

const ListWrapper = styled.div`
  padding: 2.4em;
`

const TextWrapper = styled.div``

const OfferH3 = styled.h3`
  border-bottom: 1px solid black;
  margin: auto;
`

const SectionText = styled.p`
  font-weight: 300;
  padding: 0;
  margin-top: auto;
`