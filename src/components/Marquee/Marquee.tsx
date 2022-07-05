import type { Component } from 'solid-js'
import styles from './Marquee.module.css'

const Marquee = () => {
  const logos = [
    '/src/assets/images/collegelogo1.png',
    '/src/assets/images/ISTE1.jpg',
    '/src/assets/images/ISTE2.png',
    '/src/assets/images/ISTE3.jpg',
    '/src/assets/images/sdg1.png',
    '/src/assets/images/sdg2.jpg',
    '/src/assets/images/sdg3.jpg',
    '/src/assets/images/sdg4.png',
    '/src/assets/images/sdg5.png',
    '/src/assets/images/sdg6.png',
    '/src/assets/images/sdg7.png',
    '/src/assets/images/sdg8.png',
    '/src/assets/images/sdg9.png',
    '/src/assets/images/sdg10.png',
    '/src/assets/images/sdg11.png',
    '/src/assets/images/sdg12.png',
    '/src/assets/images/sdg14.png',
    '/src/assets/images/sdg15.png',
    '/src/assets/images/sdg16.png',
    '/src/assets/images/sdg17.png',
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
