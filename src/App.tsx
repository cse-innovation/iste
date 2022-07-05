import type { Component } from 'solid-js'
import { Show, For, createSignal, createEffect } from 'solid-js'
import { Routes, Route } from 'solid-app-router'

import Fab from './components/Fab/Fab'
import Cta from './components/Cta/Cta.tsx'
import Home from './pages/Home/Home.tsx'
import ContactUs from './pages/ContactUs.tsx'
import RegistrationDetails from './pages/RegistrationDetails.tsx'
import Committees from './pages/Committees.tsx'
import AboutConvention from './pages/AboutConvention.tsx'
import AboutIste from './pages/AboutIste.tsx'
import AboutInstitution from './pages/AboutInstitution.tsx'
import RegisterNow from './pages/RegisterNow/RegisterNow.tsx'
import Poster from './pages/Poster/Poster.tsx'

export const links = [
  'registration-details',
  'contact-us',
  'committees',
  'about-convention',
  'about-iste',
  'about-institution',
  'register-now',
  'poster',
]

export const [pathName, setPathName] = createSignal(window.location.pathname)
const App: Component = () => {
  const [showCta, setShowCta] = createSignal(false)
  createEffect(() => {
    if (pathName() == '/' || pathName() == 'register-now') {
      setShowCta(false)
    } else {
      setShowCta(true)
    }
  })
  return (
    <div>
      <Fab />
      {showCta() && <Cta />}
      <Routes>
        <Route path='/' component={Home} />
        <Route path={`/${links[0]}`} component={RegistrationDetails} />
        <Route path={`/${links[1]}`} component={ContactUs} />
        <Route path={`/${links[2]}`} component={Committees} />
        <Route path={`/${links[3]}`} component={AboutConvention} />
        <Route path={`/${links[4]}`} component={AboutIste} />
        <Route path={`/${links[5]}`} component={AboutInstitution} />
        <Route path={`/${links[6]}`} component={RegisterNow} />
        <Route path={`/${links[7]}`} component={Poster} />
      </Routes>
    </div>
  )
}

export default App
