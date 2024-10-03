import { FaBars } from 'react-icons/fa';

import styles from './style.module.css';

function GlobalMenu() {
  return (
    <nav className={styles.globalMenu}>
      <FaBars className={styles.bars} />
      <ul>Global Menu</ul>
    </nav>
  );
}

export default GlobalMenu;
