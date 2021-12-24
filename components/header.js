import Head from "next/head"
import { withRouter } from "next/router"

function Header({router}) {
    return (
        <Head>
            <title>Portofolio |   {router.pathname=='/'?'Home':(router.pathname=='/contact'?'Contact me':router.pathname=='/projects'?'Projects':null)}</title>
            <link rel="icon" href="/briefcase.svg" />
        </Head>
    )
}

export default withRouter(Header)
