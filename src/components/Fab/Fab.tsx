import styles from './Fab.module.css'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'

const Fab = () => {
  function handleOnClick() {
    document.querySelector('#fab').classList.toggle(styles.activeFab)
    document.querySelector('#menu').classList.toggle(styles.activeMenu)
    // document.querySelector('#close').classList.toggle(styles.activeClose)
  }
  return (
    <div>
      <div class={styles.fab} id='fab' onClick={handleOnClick}>
        <img src={menu} alt='logo' />
      </div>
      <div class={styles.menu} id='menu'>
        <div class={styles.close} id='close' onClick={handleOnClick}>
          <img src={close} alt='close' />
        </div>
      </div>
    </div>
  )
}

export default Fab
