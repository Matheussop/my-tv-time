import { GlobalStyle } from '../styles/global';
import type { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="appContainer">
      <ThemeProvider theme={theme}>
        <Header/>
        <Component {...pageProps} />
        <GlobalStyle/>
      </ThemeProvider>
    </div>
  ) 
}

export default MyApp
