import styles from './style.module.css';

function Gallery({ imgCount }) {
  const imgs = Array.from({ length: imgCount }, (_, index) => (
    <div key={index}>
      <img
        src={`https://via.placeholder.com/100?text=Imagem+${index + 1}`}
        alt={`Image ${index + 1}`}
      />
    </div>
  ));

  return <div className={styles.gallery}>{imgs}</div>;
}

export default Gallery;
