import { useState, useEffect, useRef } from 'react';

import styles from './style.module.css';

function HamburguerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fechar o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Fechar o menu se o clique for fora do menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Bloquear o scroll quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Bloquear scroll
    } else {
      document.body.style.overflow = 'auto'; // Liberar scroll
    }

    // Limpar o efeito quando o componente for desmontado
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className={styles.conteiner}>
      <div
        className={`${styles.hamburger} ${isOpen && styles.active}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
      <nav
        ref={menuRef}
        className={`${styles.menuOptions} ${isOpen && styles.showMenu}`}
      >
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href='#option-1' onClick={() => setIsOpen(false)}>
              Opção 1
            </a>
          </li>
          <li className={styles.listItem}>
            <a href='#option-2' onClick={() => setIsOpen(false)}>
              Opção 2
            </a>
          </li>
          <li className={styles.listItem}>
            <a href='#option-3' onClick={() => setIsOpen(false)}>
              Opção 3
            </a>
          </li>
          <li className={styles.listItem}>
            <a href='#option-4' onClick={() => setIsOpen(false)}>
              Opção 4
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburguerMenu;
