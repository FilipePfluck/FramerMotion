import Header from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
