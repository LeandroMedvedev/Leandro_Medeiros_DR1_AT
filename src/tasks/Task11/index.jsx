import styles from './style.module.css';
import Ads from './components/Ads';
import ContextMenu from './components/ContextMenu';
import Footer from './components/Footer';
import GlobalMenu from './components/GlobalMenu';
import Header from './components/Header';
import MainContent from './components/MainContent';

function Task11() {
  return (
    <div className={styles.container}>
      <GlobalMenu />
      <Header />
      <ContextMenu />
      <MainContent />
      <Ads />
      <Footer />
    </div>
  );
}

export default Task11;
