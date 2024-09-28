import styles from './style.module.css';
import terminal from '../../../../assets/svgs/terminal.svg';
import HamburguerMenu from '../HamburguerMenu';
import { Svg } from '../../../../components';

function Header() {
  return (
    <header className={styles.header}>
      <Svg className={styles.logoIcon} alt='Terminal' src={terminal} />

      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href='#products'>Produtos</a>
          </li>

          <li className={styles.listItem}>
            <a href='#services'>Serviços</a>
          </li>

          <li className={styles.listItem}>
            <a href='#contact'>Contato</a>
          </li>
        </ul>
      </nav>

      <HamburguerMenu />
    </header>
  );
}

export default Header;
