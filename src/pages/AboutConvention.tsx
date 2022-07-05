import type { Component } from 'solid-js'
import Page from '../components/Page/Page.tsx'
import Content from '../components/Content/Content.tsx'

const AboutConvention: Component = () => {
  return (
    <Page title='About Convention'>
      <Content>
        ISTE is highly reputed society in improving quality of technical
        education in India and it has vast history of developing skills and
        competencies of technical faculty. ISTE along with technical
        institutions conducts annual faculty conventions at national level and
        at the level of various sections to discuss, and exchange knowledge on
        the issues related to upliftment of technical education in particular
        and society in general. The Sustainable Development Goals were adopted
        by the United Nations in 2015 as a call-to-action for people worldwide
        to address five critical areas of importance by 2030: people, planet,
        prosperity, peace, and partnership. Higher Education Institutes play
        vital role in achieving Sustainable Development Goals. HEIs can
        integrate SDGs into their curriculum, campus operations, Research &amp;
        innovation, idea incubation and creation of start-ups that cater to one
        or a combination of more goals under the SDGS. HEIs are also accountable
        for shaping next generation professionals as ethical and responsible
        human beings, who will have the decisive impact on achieving SDGs.
      </Content>
    </Page>
  )
}

export default AboutConvention
