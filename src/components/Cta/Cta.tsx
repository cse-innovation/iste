import type { Component } from 'solid-js'
import { Link } from 'solid-app-router'
import styles from './Cta.module.css'
import { setPathName } from '../../App.tsx'

const Cta: Component = () => {
  return (
    <Link
      class={styles.button}
      onClick={() => setPathName('register-now')}
      href='/register-now'
    >
      Register Now!
    </Link>
  )
}

export default Cta
