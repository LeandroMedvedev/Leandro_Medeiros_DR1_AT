import styles from './style.module.css';
import user from '../../../../assets/svgs/user-circle.svg';
import HamburguerMenu from '../HamburguerMenu';
import { Svg } from '../../../../components';

function Header() {
  return (
    <header className={styles.header}>
      <HamburguerMenu />

      <p className={styles.brand}>ProfileSync</p>

      <Svg className={styles.logoIcon} alt='User' src={user} />
    </header>
  );
}

export default Header;
