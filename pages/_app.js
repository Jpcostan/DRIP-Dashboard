import '../styles/globals.css'
import '../styles/master.css'
import '../styles/media.css'

function MyApp({ Component, pageProps }) {

  /*
    <header className=''>
    <div>
      <h1>DRIP SYNDICATE DASHBOARD</h1>
    </div>
    </header>
  */

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
