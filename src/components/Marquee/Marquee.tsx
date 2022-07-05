import type { Component } from 'solid-js'
import styles from './Marquee.module.css'

const Marquee = () => {
  const logos = [
    '/images/collegelogo1.png',
    '/images/ISTE1.jpg',
    '/images/ISTE2.png',
    '/images/ISTE3.jpg',
    '/images/sdg1.png',
    '/images/sdg2.jpg',
    '/images/sdg3.jpg',
    '/images/sdg4.png',
    '/images/sdg5.png',
    '/images/sdg6.png',
    '/images/sdg7.png',
    '/images/sdg8.png',
    '/images/sdg9.png',
    '/images/sdg10.png',
    '/images/sdg11.png',
    '/images/sdg12.png',
    '/images/sdg14.png',
    '/images/sdg15.png',
    '/images/sdg16.png',
    '/images/sdg17.png',
  ]
  return (
    <div className={styles.marquee}>
      <div className={styles['marquee-content']}>
        {logos.reverse().map((l) => (
          <img key={l} src={l} />
        ))}
      </div>
      <div className={`${styles['marquee-content']} ${styles.delay}`}>
        {logos.map((l) => (
          <img key={l} src={l} />
        ))}
      </div>
    </div>
  )
}

export default Marquee
