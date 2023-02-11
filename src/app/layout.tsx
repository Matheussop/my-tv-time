"use client"
import {ReactNode} from 'react'
import { Header } from '../components/Header'
import { Providers } from './providers'
import { GlobalStyle } from "../styles/global";
import { SideBar } from '../components/SideBar';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang='pt-BR'>
    <head/>
    <body>
      <Providers>
        <Header/>
        <GlobalStyle/>
        {children}
        <SideBar/>
      </Providers>
    </body>
    </html>
  )
}
