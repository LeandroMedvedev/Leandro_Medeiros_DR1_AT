import styles from './style.module.css';
import Ads from './components/Ads';
import ContextMenu from './components/ContextMenu';
import Footer from './components/Footer';
import GlobalMenu from './components/GlobalMenu';
import Header from './components/Header';
import MainContent from './components/MainContent';

function Task04() {
  return (
    <div className={styles.container}>
      <Header />
      <GlobalMenu />
      <ContextMenu />
      <MainContent />
      <Ads />
      <Footer />
    </div>
  );
}

export default Task04;
