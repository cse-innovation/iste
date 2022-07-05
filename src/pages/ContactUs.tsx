import type { Component } from 'solid-js'
import Page from '../components/Page/Page.tsx'
import Content from '../components/Content/Content.tsx'

const ContactUs: Component = () => {
  return (
    <Page title='Contact Us'>
      <Content>
        <table>
          <tbody>
            <tr>
              <td>
                Dr. P. Rathna
                <br />
                Convener - ISTE Faculty Convention – 2022
              </td>
              <td>+91-9008864051</td>
            </tr>
            <tr>
              <td>Prof. Raghavendra Rao. B</td>
              <td>+91-7019996463</td>
            </tr>
            <tr>
              <td>Prof. P. Venugopal</td>
              <td>+91-7760793587</td>
            </tr>
            <tr>
              <td>Prof. Prashanth. K</td>
              <td>+91-9380670450</td>
            </tr>
            <tr>
              <td>Prof. Yogananda. B. S</td>
              <td>+91-9900243659</td>
            </tr>
            <tr>
              <td>E-mail ID</td>
              <td>convention@sairamce.edu.in</td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Page>
  )
}

export default ContactUs
