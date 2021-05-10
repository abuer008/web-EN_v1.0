import { Slides } from "../../components/phoneComponents/Slides";
import { DesignMetricsData } from "../../data/CardData";
import Layout from '../../components/Layout'
import { ContentsList } from "../../components/phoneComponents/ContentsList";

const DesignMetrics = () => {
    return (
        <Layout>
            <div style={{overflow: 'hidden'}}>
            <Slides initialSlide={3} />
            <ContentsList contentsData={DesignMetricsData} listTitle='Design Metrics' />
            </div>
        </Layout>
    )
}

export default DesignMetrics