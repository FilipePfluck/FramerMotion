import Head from 'next/head'

import GlobalStyle from '../src/styles/global'

import HomeComponent from '../src/pages/Home'

export default function Home() {
  return (
    <>
      <GlobalStyle/>
      <HomeComponent/>
    </>

  )
}
