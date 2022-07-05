import type { Component } from 'solid-js'
import styles from './Content.module.css'

const Content: Component = (props) => {
  return (
    <div class={styles.container}>
      <div class={styles.subTitle}>{props.title}</div>
      <div class={styles.body}>{props.children}</div>
    </div>
  )
}

export default Content
