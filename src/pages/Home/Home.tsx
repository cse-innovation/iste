import type { Component } from 'solid-js'
import { createSignal, createEffect } from 'solid-js'
import styles from './Home.module.css'
import Marquee from '../../components/Marquee/Marquee.tsx'

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
    <div>
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
            <br /> sustainable energy I guess
          </div>
        </div>
        <div class={styles.cta}>Register Now!</div>
      </div>
      {/* Marquee */}
      <Marquee />
    </div>
  )
}

export default Home
