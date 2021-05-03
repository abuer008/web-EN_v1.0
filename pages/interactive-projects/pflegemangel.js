import { PhonePflegeMangel } from "../../components/phoneComponents/PhonePflegeMangel";
import {usePhoneVersion} from "../../components/usePhoneVersion";
import Layout from '../../components/Layout'

const PflegeMangel = () => {
    const phoneVersion = usePhoneVersion()

    return (
        <Layout isBlack={false} backgroundColor='#303030' overwrite>
            {phoneVersion ? <PhonePflegeMangel /> : <StandardPflegemangel />}
        </Layout>
    )
}

const StandardPflegemangel = () => {
    return (
        <>

        </>
    )
}

export default PflegeMangel