import React, { Component } from 'react';
import styles from './Header.module.css';
import './Header.css';

import Container from "../../common/Container/Container";
import Hamburger from "../Hamburger/Hamburger";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Container className={styles.container}>
          <a
            href="/"
            className={styles.logo}>
            Gravity
          </a>
          <button
            className={styles.search}
          />
          <Hamburger/>
        </Container>
      </header>
    );
  }
}

export default Header;
