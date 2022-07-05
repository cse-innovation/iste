import type { Component } from 'solid-js'
import { createSignal, createEffect } from 'solid-js'
import { Link } from 'solid-app-router'

import styles from './Home.module.css'
import Marquee from '../../components/Marquee/Marquee.tsx'
import Page from '../../components/Page/Page.tsx'

const Home: Component = () => {
  let ti1 = {
    subtitle: 'ISTE Karanatak State',
    num: 23,
    sup: 'rd',
    title1: 'Faculty',
    title2: 'Convention',
  }
  let ti2 = {
    subtitle: 'Dr. L. S. Chandrakanth',
    num: 31,
    sup: 'st',
    title1: 'Memorial',
    title2: 'Lecture',
  }
  const [title, setTitle] = createSignal(ti1)
  function changeCount() {
    setInterval(() => {
      if (title().num == 23) setTitle(ti2)
      else setTitle(ti1)
    }, 10000)
  }
  createEffect(() => {
    changeCount()
  })
  return (
    <div class={styles.page}>
      {/* Hero Section */}
      <div class={styles.frame}>
        <div class={styles.date}>
          <div>
            21<sup>st</sup> July
          </div>
          <span class={styles.year}>2022</span>
        </div>
        <div class={styles.titleBox}>
          <div class={styles.mainTitle} id='mainTitle'>
            <div class={styles.subtitle} id='sub'>
              {title().subtitle}
            </div>
            <div class={styles.title}>
              {title().num}
              <sup>{title().sup}</sup> {title().title1} <br />
              {title().title2}
            </div>
          </div>
          <div class={styles.theme}>
            Theme: The Role of Higher <br />
            Education Institutions In achieving
            <br />
            sustainable energy
          </div>
        </div>
        <Link class={styles.cta} href='/register-now'>
          Register Now!
        </Link>
      </div>
      {/* Marquee */}
      <Marquee />
      <div class={styles.footer}>
        Brought To You By Sri Sairam College Of Engineering, Anekal
      </div>
    </div>
  )
}

export default Home
