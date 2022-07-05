import type { Component } from 'solid-js'
import { Link } from 'solid-app-router'

import Page from '../../components/Page/Page.tsx'
import Content from '../../components/Content/Content.tsx'
import styles from './Poster.module.css'
import lstyles from '../RegisterNow/RegisterNow.module.css'

const Poster: Component = () => {
  const pdf =
    'https://drive.google.com/file/d/1yn-ODwnVZUE8QFJ-pQXDmjjCUcwSH4pk/view?usp=sharing'
  return (
    <Page title='Poster'>
      <img class={styles.img} src='/images/poster1.jpg' />
      <img class={styles.img} src='/images/poster2.jpg' />
      <Content>
        <Link class={lstyles.link} href={pdf}>
          Download Poster
        </Link>
      </Content>
    </Page>
  )
}

export default Poster
