import styles from './style.module.css';
import user from '../../../../assets/svgs/user-circle.svg';
import HamburguerMenu from '../HamburguerMenu';
import { Svg } from '../../../../components';

function Header() {
  return (
    <header className={styles.header}>
      <HamburguerMenu />

      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href='#profile-sync'>ProfileSync</a>
          </li>
        </ul>
      </nav>

      <Svg className={styles.logoIcon} alt='Terminal' src={user} />
    </header>
  );
}

export default Header;
