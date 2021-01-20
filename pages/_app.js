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
                <title>Boweis interactive portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="the personal understanding of interactive design." />
                <meta name="boweis-interactive-portfolio" content="Boweis' Interactive Design"/>
                <meta name="msapplication-TileColor" content="#d91d47"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <LoadingBar />
            <Component {...pageProps} />
        </>
    )
}
