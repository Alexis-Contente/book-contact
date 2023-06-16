'use client'

// IMPORTS
import styles from './page.module.css';
import SearchBar from '@/components/searchBar';
import ListContacts from '@/components/listContacts';
import AddForm from '@/components/addForm';
import { useState } from 'react';

// FUNCTION APP
export default function App() {
// TOGGLE THAT OPEN THE ADD FORM
const [formDisplay, setFormDisplay] = useState(false);

const toggleDisplayForm = () => {
  setFormDisplay(!formDisplay);
};

  return (
    <main className={styles.main}>
      <SearchBar toggleDisplayForm={toggleDisplayForm} />
      <ListContacts />
      <AddForm formDisplay={formDisplay} toggleDisplayForm={toggleDisplayForm}/>
    </main>
  )
}
