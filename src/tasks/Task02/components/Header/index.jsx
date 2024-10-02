import { FaBars } from 'react-icons/fa';

import styles from './style.module.css';
import { Svg } from '../../../../components/';
import social from '../../../../assets/svgs/social-evernote.svg';

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Svg className={styles.logoIcon} src={social} />
        <FaBars className={styles.menuIcon} />
      </div>
      <nav className={styles.menu}>
        <ul>
          <li className={styles.menuItem}>Perfil</li>
          <li className={styles.menuItem}>Postagens</li>
          <li className={styles.menuItem}>Amigos</li>
          <li className={styles.menuItem}>Fotos</li>
          <li className={styles.menuItem}>Vídeos</li>
          <li className={styles.menuItem}>Configurações</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
