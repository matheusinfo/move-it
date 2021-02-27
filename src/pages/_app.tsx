import '../styles/color.css'
import GlobalStyle from '../styles/global'

import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
