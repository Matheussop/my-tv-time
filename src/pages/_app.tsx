import { GlobalStyle } from '../styles/global';
import type { AppProps } from 'next/app'
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="appContainer">
      <Header/>
      <Component {...pageProps} />
      <GlobalStyle/>
    </div>
  ) 
}

export default MyApp
