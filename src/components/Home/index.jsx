import { Link } from 'react-router-dom';

import styles from './style.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mobile-First UI com React</h1>
      <h2>Assessment</h2>

      <ul>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-one'>
            Tarefa 01
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-two'>
            Tarefa 02
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-three'>
            Tarefa 03
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-four'>
            Tarefa 04
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-five'>
            Tarefa 05
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-six'>
            Tarefa 06
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-seven'>
            Tarefa 07
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-eight'>
            Tarefa 08
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-nine'>
            Tarefa 09
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-ten'>
            Tarefa 10
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-eleven'>
            Tarefa 11
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-twelve'>
            Tarefa 12
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-thirteen'>
            Tarefa 13
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-fourteen'>
            Tarefa 14
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-fifteen'>
            Tarefa 15
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/task-sixteen'>
            Tarefa 16
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
