import type { Component } from 'solid-js'
import { For, createSignal } from 'solid-js'
import { Link } from 'solid-app-router'
import styles from './Fab.module.css'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import { links, setPathName } from '../../App.tsx'

const Fab: Component = () => {
  const [nav, setNav] = createSignal(false)
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

  function preventDefault(e) {
    e.preventDefault()
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e)
      return false
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false
  try {
    window.addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassive = true
        },
      })
    )
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false
  var wheelEvent =
    'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

  // call this to Disable
  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false) // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt) // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false)
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false)
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
    window.removeEventListener('touchmove', preventDefault, wheelOpt)
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
  }

  function handleOnClick() {
    setNav(!nav())
    nav() ? disableScroll() : enableScroll()
    document.querySelector('#fab').classList.toggle(styles.activeFab)
    document.querySelector('#menu').classList.toggle(styles.activeMenu)
  }

  function handleHyphen(s: string) {
    if (s == 'about-iste') {
      return 'About ISTE'
    }
    return s.split('-').join(' ')
  }

  return (
    <div>
      <div class={styles.fab} id='fab' onClick={handleOnClick}>
        <img class={styles.icon} src={menu} alt='logo' />
      </div>
      <div class={styles.menu} id='menu'>
        <div class={styles.close} id='close' onClick={handleOnClick}>
          <img class={styles.icon} src={close} alt='close' />
        </div>
        <div class={styles.menuBox}>
          <div class={styles.title}>Welcome to ISTE FC 2022!</div>
          <div class={styles.options}>
            <Link
              class={styles.link}
              href='/'
              onClick={() => {
                handleOnClick()
                setPathName('/')
              }}
            >
              Home
            </Link>
            <For each={links}>
              {(link) => (
                <Link
                  class={styles.link}
                  href={`/${link}`}
                  onClick={() => {
                    handleOnClick()
                    setPathName(link)
                  }}
                >
                  {handleHyphen(link)}
                </Link>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fab
