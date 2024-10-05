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
    <>
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
            <a href='#start' onClick={() => setIsOpen(false)}>
              Início
            </a>
          </li>
          <li className={styles.listItem}>
            <a href='#profile' onClick={() => setIsOpen(false)}>
              Perfil
            </a>
          </li>
          <li className={styles.listItem}>
            <a href='#messages' onClick={() => setIsOpen(false)}>
              Mensagens
            </a>
          </li>
          <li className={styles.listItem}>
            <a href='#notifications' onClick={() => setIsOpen(false)}>
              Notificações
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HamburguerMenu;
