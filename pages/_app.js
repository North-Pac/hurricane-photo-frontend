import '../styles/globals.css'

import { AuthProvider, BrowserRouter } from '../contexts/auth';
// import Layout from '../components/layout';

function MyApp({ Component, pageProps })
{
    return (
        <AuthProvider>
            {/* <Layout> */}
            <Component {...pageProps} />
            {/* </Layout> */}
        </AuthProvider>
    )
}

export default MyApp
