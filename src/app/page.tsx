'use client';

// IMPORTS
import styles from './page.module.css';
import SearchBar from '@/components/searchBar';
import ListContacts from '@/components/listContacts';
import AddForm from '@/components/addForm';
import ModifyForm from '@/components/modifyForm';
import axios from 'axios';
import { useState } from 'react';

// FUNCTION APP
export default function App() {
  // TOGGLE THAT OPEN THE ADD FORM
  const [formDisplay, setFormDisplay] = useState(false);

  const toggleDisplayForm = () => {
    setFormDisplay(!formDisplay);
  };

  // TOGGLE THAT OPEN THE MODIFY FORM
  const [modifyFormDisplay, setModifyFormDisplay] = useState(false);

  const toggleDisplayModale = () => {
    setModifyFormDisplay(!modifyFormDisplay);
  };

  // TOGGLE THAT OPEN THE MODIFY FORM WITH DATA'S USER
  const [user, setUser] = useState(null);

  const toggleDisplayModifyForm = async (id: string) => {
    axios
      .get(`http://localhost:8000/db/${id}`)
      .then((response) => {
        const data = response.data;
        setUser(data);
        console.log(response.data);
        return response;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main className={styles.main}>
      <SearchBar toggleDisplayForm={toggleDisplayForm} />
      <ListContacts toggleDisplayModifyForm={toggleDisplayModifyForm} toggleDisplayModale={toggleDisplayModale} />
      <AddForm formDisplay={formDisplay} toggleDisplayForm={toggleDisplayForm} />
      <ModifyForm modifyFormDisplay={modifyFormDisplay} toggleDisplayModale={toggleDisplayModale} user={user} />
    </main>
  );
}
