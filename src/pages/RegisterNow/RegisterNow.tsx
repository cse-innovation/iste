import type { Component } from 'solid-js'
import { Link } from 'solid-app-router'

import Page from '../../components/Page/Page.tsx'
import Content from '../../components/Content/Content.tsx'
import styles from './RegisterNow.module.css'

const RegisterNow: Component = () => {
  const pdf =
    'https://drive.google.com/file/d/1sU-u2PERnwdBVCgNAVB39EYkjIjHuuJV/view?usp=sharing'
  const form =
    'https://docs.google.com/forms/d/e/1FAIpQLSf9t7hSMHX8Yk-Nym4-bU1HGIXGf9nxCZv2xn7LeqLITI-TtQ/viewform?usp=sf_link'

  return (
    <Page title='Register Now'>
      <Content title='Online Registration'>
        <p>Apply by filling the Google form given below.</p>
        <Link class={styles.link} href={form}>
          Apply Now
        </Link>
      </Content>
      <Content title='Offline Registration'>
        <p>
          Print the downloadable form and send in mail to the address provided
          in the form.
        </p>
        <Link class={styles.link} href={pdf}>
          Download Form
        </Link>
      </Content>
    </Page>
  )
}

export default RegisterNow
