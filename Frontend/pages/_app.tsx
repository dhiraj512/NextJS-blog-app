import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='body mx-auto font-sans '>
      <div className=" mx-5">
        <Navbar />
        <main className='pb-10'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
