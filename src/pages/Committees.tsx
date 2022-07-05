import type { Component } from 'solid-js'
import { For } from 'solid-js'
import Page from '../components/Page/Page.tsx'
import Content from '../components/Content/Content.tsx'

const Committees: Component = () => {
  const data = [
    {
      title: 'Chief Patron',
      members: [
        'Sri Sai Prakash LeoMuthu',
        'Chairman &amp; CEO, Sairam Group of Institutions',
      ],
    },
    {
      title: 'Patron',
      members: [
        'Dr. Pratapsinh K Desai, President ISTE New Delhi',
        'Dr. D. S. Suresh, Chairman ISTE Karnataka Section',
        'Dr. C. K. Subbaraya, Past Cairman ISTE Karnataka',
        'Dr. R. Arun Kumar, Management Representative, SSCE, Bengaluru',
      ],
    },
    {
      title: 'Convention Chair',
      members: ['Dr. B. Shadaksharappa, Principal, SSCE, Bengaluru'],
    },
    {
      title: 'National Executive Council Member, ISTE: New Delhi',
      members: [
        'Dr. Sangappa S. B',
        'Dr. J. Prakash',
        'Dr. Rajappa Velur',
        'Dr. Sharanappa G Malashetty',
        'Dr. T. N Sreenivasa',
        'Dr. M. S. Govinde Gowda',
        'Dr. Puttamadappa. C',
        'Dr. C. K. Subbaraya',
        'Dr. Rangaswamy B. E',
        'Dr. Devaraju S. B',
        'Dr. S. M. Shashidhara',
      ],
    },
    {
      title: 'SMC Members: ISTE, Karnataka Section',
      members: [
        'Dr. Narendra B. K',
        'Mr. Lingaraj G. Vaidya',
        'Dr. Sangamesh',
        'Mr. Nijananda Reddy',
        'Mr. Shashank M. Gowda',
      ],
    },
    {
      title: 'Advisory Committee',
      members: [
        'Dr. C. K. Subbaraya, Chairman, ISTE, Karnata, Section',
        'Prof. Y. Vrushabhendrappa, Former chairman, ISTE, Karnata, Section',
        'Prof. Sangappa, ISTE Executive Council Member, ISTE, Karnata, Section',
        'Dr. B. A. Patil, Director, Ink &amp; think Educational Foundation, Bengaluru',
        'Dr. R. Arun Kumar, Management Representative, SSCE, Bengaluru',
      ],
    },
    {
      title: 'Organizing Committee',
      members: [
        'Dr. R. Arun Kumar, Management Representative, SSCE, Bengaluru',
        'Dr. P. Gangavathi, Prof &amp; HOD(S&amp;H), SSCE, Bengaluru',
        'Prof. C. Sivaprakash, Prof &amp; HOD(CSE, AI &amp; ML), SSCE, Bengaluru',
        'Dr. T. N. Prabakar, Prof &amp; HOD(ECE), SSCE, Bengaluru',
        'Prof. K. V. Malini, Prof &amp; HOD(EEE), SSCE, Bengaluru',
        'Prof. Balaji. V, Prof &amp; HOD(MECH), SSCE, Bengaluru',
        'Prof. Raghavendra Rao. B, Prof &amp; HOD(ISE), SSCE, Bengaluru',
      ],
    },
    { title: 'Convener', members: ['Dr. Rathna P'] },
  ]
  return (
    <Page title='Committees'>
      <Content>
        <table>
          <tbody>
            <For each={data}>
              {(datum) => (
                <tr>
                  {console.log(datum.members)}
                  <td>{datum.title}</td>
                  <td>
                    <For each={datum.members}>
                      {(member) => <p>{member}</p>}
                    </For>
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </Content>
    </Page>
  )
}

export default Committees
