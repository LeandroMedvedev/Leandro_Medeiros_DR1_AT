import styles from './style.module.css';
import HamburgerMenu from '../HamburgerMenu';

function GlobalMenu() {
  return (
    <nav className={styles.globalMenu}>
      <HamburgerMenu />
      <ul>Global Menu</ul>
    </nav>
  );
}

export default GlobalMenu;
