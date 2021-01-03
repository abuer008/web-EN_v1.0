import Document, { Html, Head, Main, NextScript } from "next/document";
import {ServerStyleSheet} from "styled-components";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal()
        }
    }
    render() {
        return (
        <Html lang="en-US" style={{scrollSnapType: "y mandatory"}}>
        <Head>
            <meta name="description" content="A site for bowei's portfolio" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@300;400;500;700;900&family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="boweis-interactive-portfolio" content="Boweis' Interactive Design"/>
            <meta name="boweis-interactive-portfolio" content="Boweis' Interactive Design"/>
            <meta name="msapplication-TileColor" content="#d91d47"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
        )
    }
}

export default MyDocument