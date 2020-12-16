import Head from 'next/head';
import 'nprogress/nprogress.css'
import dynamic from "next/dynamic";

const LoadingBar = dynamic(() => {
    return import('../components/LoadingBar')
}, {ssr: false})

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <LoadingBar />
            <Component {...pageProps} />
        </>
    )
}
