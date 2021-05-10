import styled from 'styled-components'
import Layout from "../../components/Layout";
import { Slides } from '../../components/phoneComponents/Slides'
import { ContentsList } from "../../components/phoneComponents/ContentsList";
import { ImplementCardData } from "../../data/CardData";

const Implement = () => {
    return (
        <Layout>
            <div style={{overflow: 'hidden'}}>
            <Slides initialSlide={1} />
            <ContentsList contentsData={ImplementCardData} listTitle='Frontend Implementation' />
            </div>
        </Layout>
    )
}

export default Implement