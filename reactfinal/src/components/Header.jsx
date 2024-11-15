import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Adivinanzas App</h1>
      <nav>
        <ul className={styles.navList}>
          <a href="#Inicio">Inicio</a>
          <a href="#Sobre nosotros">Sobre nosotros</a>
          <a href="#Contacto">Contacto</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
