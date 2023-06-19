'use client'

// IMPORTS
import styles from './page.module.css';
import SearchBar from '@/components/searchBar';
import ListContacts from '@/components/listContacts';
import AddForm from '@/components/addForm';
import { useState } from 'react';
import ModifyForm from '@/components/modifyForm';

// FUNCTION APP
export default function App() {
// TOGGLE THAT OPEN THE ADD FORM
const [formDisplay, setFormDisplay] = useState(false);

const toggleDisplayForm = () => {
  setFormDisplay(!formDisplay);
};

// TOGGLE THAT OPEN THE MODIFY FORM
const [modifyFormDisplay, setModifyFormDisplay] = useState(false);

const toggleDisplayModifyForm = () => {
  setModifyFormDisplay(!modifyFormDisplay);
};


  return (
    <main className={styles.main}>
      <SearchBar toggleDisplayForm={toggleDisplayForm} />
      <ListContacts toggleDisplayModifyForm={toggleDisplayModifyForm}/>
      <AddForm formDisplay={formDisplay} toggleDisplayForm={toggleDisplayForm}/>
      <ModifyForm modifyFormDisplay={modifyFormDisplay} toggleDisplayModifyForm={toggleDisplayModifyForm}/>
    </main>
  )
}
