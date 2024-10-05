import styles from './style.module.css';
import user from '../../../../assets/svgs/user-circle.svg';
import HamburguerMenu from '../HamburguerMenu';
import { Svg } from '../../../../components';

function Header() {
  return (
    <header className={styles.header}>
      <HamburguerMenu />

      <p className={styles.brand}>ProfileSync</p>

      <nav className={styles.menuOptions}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href='#start'>Início</a>
          </li>
          <li className={styles.listItem}>
            <a href='#profile'>Perfil</a>
          </li>
          <li className={styles.listItem}>
            <a href='#messages'>Mensagens</a>
          </li>
          <li className={styles.listItem}>
            <a href='#notifications'>Notificações</a>
          </li>
        </ul>
      </nav>

      <Svg className={styles.logoIcon} alt='User' src={user} />
    </header>
  );
}

export default Header;
