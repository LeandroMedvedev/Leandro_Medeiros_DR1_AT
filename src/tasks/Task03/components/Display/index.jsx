import { useState } from 'react';

import styles from './style.module.css';
import Gallery from '../Gallery';

function Display() {
  const [imgCount, setImgCount] = useState(0);

  function addImg() {
    setImgCount(imgCount + 1);
  }

  function removeImg() {
    setImgCount(imgCount > 0 ? imgCount - 1 : 0);
  }

  return (
    <div className={styles.container}>
      <button className={styles.sign} onClick={addImg}>
        +
      </button>
      <span>{imgCount}</span>
      <button className={styles.sign} onClick={removeImg}>
        -
      </button>
      <Gallery imgCount={imgCount} />
    </div>
  );
}

export default Display;
