import type { Component } from 'solid-js'
import Page from '../components/Page/Page.tsx'
import Content from '../components/Content/Content.tsx'

const AboutIste: Component = () => {
  return (
    <Page title='About ISTE'>
      <Content>
        Indian Society for Technical Education (ISTE) is a national level
        professional non-profit society in the field of technical education In
        India. In the year 1941, ATPI, the Association of Principals of
        Technical institutions, was initiated. In 1967, the ATPI was
        reconstituted as ISTE with the intention to expand its activities for
        the advancement of technical education. The ISTE plays an important role
        to improve the standards of education. It cooperates with Central and
        State Governments, industry and approved institutions, professional
        bodies, like AICTE, MHRD, DST and individuals in bringing out new
        initiatives for elevating standards of technical education in India.
      </Content>
    </Page>
  )
}

export default AboutIste
