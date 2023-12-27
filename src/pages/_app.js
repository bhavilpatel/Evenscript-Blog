import '@/styles/globals.css'
import Navbar from './layout/navbar'
import Footer from './layout/footer'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
