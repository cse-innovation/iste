import type { Component } from 'solid-js'
import { For } from 'solid-js'
import Page from '../components/Page/Page.tsx'
import Content from '../components/Content/Content.tsx'

const AboutInstitution: Component = () => {
  const data = [
    {
      title: 'UG Courses',
      subs: [
        'Artificial Intelligence and Machine Learning',
        'Computer Science Engineering',
        'Information Science Engineering',
        'Electronics Communication Engineering',
        'Electrical Electronics Engineering',
        'Mechanical Engineering',
        'B. Sc Honours',
      ],
    },
    {
      title: 'Research Centres',
      subs: [
        'Computer Science Engineering',
        'Electronics Communication Engineering',
        'Mechanical Engineering',
        'Chemistry',
      ],
    },
  ]
  return (
    <Page title='About Istitution'>
      <Content>
        <p>
          Sri Sairam College of Engineering is established in the year 1997 by
          well-known philanthropist MJF. Ln. Leo Muthu. Sri Sairam College of
          Engineering is managed by Sapthagiri Educational &amp; Charitable
          Trust, Bengaluru. The college is excelling in all areas of engineering
          education under the visionary leadership of Sri. Sai Prakash LeoMuthu,
          Chairman &amp; CEO, Sairam Institutions. The college is accredited by
          NAAC &amp; is rated as one of the top engineering colleges by various
          leading publications. Quality education, holistic development of
          students and promoting students as ethical &amp; responsible citizens
          of India are key concerns of the institution. With the quality policy
          of building the better nation through quality education &amp; the
          vision to emerge as centre of excellence in technical education, the
          institution has successfully completed 25 years with numerous
          milestone &amp; proudly celebrating silver jubilee year.
        </p>
        <table>
          <tbody>
            <For each={data}>
              {(datum) => (
                <tr>
                  <td>{datum.title}</td>
                  <td>
                    <For each={datum.subs}>{(sub) => <p>{sub} </p>}</For>
                  </td>{' '}
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </Content>
    </Page>
  )
}

export default AboutInstitution
