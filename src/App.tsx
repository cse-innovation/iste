import type { Component } from 'solid-js'
import { Show, For } from 'solid-js'
import { Routes, Route } from 'solid-app-router'

import Fab from './components/Fab/Fab'
import Cta from './components/Cta/Cta.tsx'
import Home from './pages/Home/Home.tsx'
import RegistrationDetails from './pages/RegistrationDetails.tsx'

export const links = [
  'registration-details',
  'important-dates',
  'about-iste',
  'about-institution',
]

const App: Component = () => {
  return (
    <div>
      <Fab />
      <Show when={window.location.pathname != '/'}>
        <Cta />
      </Show>
      <Routes>
        <Route path='/' component={Home} />
        <Route path={`/${links[0]}`} component={RegistrationDetails} />
      </Routes>
    </div>
  )
}

export default App
