import type {Component} from 'solid-js'
import styles from './Page.module.css'

const Page: Component = (props) => {
  return (
    <div class={styles.container}>
      <div class={styles.pageTitle}>{props.title}</div>
      {props.children}
    </div>
  )
}

export default Page
