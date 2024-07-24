import Head from "next/head";

export default function HeadElement () {
    return (
        <Head>
            <link
                rel="icon"
                href="/icon.ico"
            />
            <meta
                property='og:title'
                content='binmaster'
            />
            <meta
                property='og:description'
                content='The best automation tools for Hypixel Skyblock.'
            />
            <meta
                property='og:image'
                content='https://i.imgur.com/GONMIqa.png'
            />
        </Head>
    )
}
