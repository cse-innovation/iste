import type { Component } from 'solid-js'
import { For } from 'solid-js'
import styles from './Page.module.css'
import Content from '../components/Content/Content.tsx'
import Page from '../components/Page/Page.tsx'

const RegistrationDetails: Component = () => {
  const data = [
    {
      title: 'Topics',
      body: `
Any Contribution in the field of technology advancements, SDG
Implementation and societal welfare`,
    },
    {
      title: 'Paper Format',
      body: `
All authors are requested to send their contribution in A4 size paper as
per the IEE format. Paper must have an abstract of about 250 words
along with keywords max no. of 6 pages.`,
    },
    {
      title: 'Target group',
      body: `
Faculty members from Engineering College, Polytechnic or from any
Higher Educational Institutions are Eligible.
Maximum 4 authors per paper`,
    },
    {
      title: 'Accommodation',
      body: `Free Accommodation for the participants will be arranged on first come
		first served basis in the college hostel.`,
    },
    {
      title: 'Last Dates',
      body: `
Last Date for sending Paper : 05.07.2022
Acceptance announcement : 08.07.2022
Last date for registration : 10.07.2022`,
    },
    {
      title: 'Registration Fees',
      body: ` 
ISTE Member : R 750/-
Non - ISTE Members : R 1000/-
The demand draft is to be drawn in favour of The Principal, Sri Sairam
College of Engineering, payable at Bengaluru`,
    },
  ]

  return (
    <Page title='Registration Details'>
      <For each={data.slice(0, 4)}>
        {(datum) => <Content title={datum.title}>{datum.body}</Content>}
      </For>
      <Content title={data[4].title}>
        <table>
          <tbody>
            <tr>
              <td>Sending Paper</td>
              <td>05/07/22</td>
            </tr>
            <tr>
              <td>Acceptance Announcement</td>
              <td>08/07/22</td>
            </tr>
            <tr>
              <td>Registration</td>
              <td>10/07/22</td>
            </tr>
          </tbody>
        </table>
      </Content>
      <Content title={data[5].title}>
        <table>
          <tbody>
            <tr>
              <td>ISTE Member</td>
              <td>Rs. 750/-</td>
            </tr>
            <tr>
              <td>Non ISTE Member</td>
              <td>Rs. 1000/-</td>
            </tr>
          </tbody>
        </table>
        <p>
          The demand draft is to be drawn in favour of The Principal, Sri Sairam
          College of Engineering, payable at Bengaluru
        </p>
      </Content>
    </Page>
  )
}

export default RegistrationDetails
