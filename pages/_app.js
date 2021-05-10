import Head from 'next/head';
import 'nprogress/nprogress.css'
import dynamic from "next/dynamic";

import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'
import { createStore } from 'redux';

const LoadingBar = dynamic(() => {
    return import('../components/LoadingBar')
}, {ssr: false})

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Boweis next-gen interaction</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Boweis design website" />
                <meta name="boweis-interactive-projects" content="Boweis' Interactive Design"/>
                <meta name="msapplication-TileColor" content="#d91d47"/>
                <meta name="theme-color" content="#000"/>
            </Head>
            <LoadingBar />
            <Provider store={store}>
                <Component {...pageProps} />
                </Provider>
        </>
    )
}

const makeStore = () => store

const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
