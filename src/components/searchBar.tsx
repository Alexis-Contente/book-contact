'use client';

// IMPORTS
import styles from '../app/page.module.css';
import { useState } from 'react';

type Props = {
  toggleDisplayForm: () => void;
};

// export default function SearchBar<Props>({toggleDisplayForm}) {
export default function SearchBar(props: Props) {
  const { toggleDisplayForm } = props;

  return (
    <form className={styles.inputs__main}>
      <input className={styles.search} placeholder="Search contact" type="text" />
      <button className={styles.add} type="submit">
        Rechercher
      </button>
      <button className={styles.add} onClick={toggleDisplayForm}>
        ADD CONTACT
      </button>
    </form>
  );
}
