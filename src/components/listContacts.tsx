'use client';

// IMPORTS
import styles from '../app/page.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

// TYPE CONTACT
type Contacts = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  birth: number;
  informations: string;
};

// TYPE PROPS
type Props = {
  toggleDisplayModifyForm: (id: string) => void;
  toggleDisplayModale: () => void;
};

export default function ListContacts(props: Props, contact: Contacts) {
  const { toggleDisplayModifyForm, toggleDisplayModale } = props;

  // FUNCTION THAT GET INFORMATIONS OF CONTACTS FOR DISPLAY
  const [contacts, setContacts] = useState<Contacts[] | null>(null);

  // REQUEST TO GET DATA CONTACT
  const contactsData = async () => {
    axios
      .get('http://localhost:8000/db')
      .then((response) => {
        setContacts(response.data.db);
        console.log(response.data.db);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    contactsData();
  }, []);

  return (
    <>
      {contacts &&
        contacts.map((contact) => (
          <div key={contact.id} onClick={toggleDisplayModale}>
            <div className={styles.book} onClick={() => toggleDisplayModifyForm(contact.id.toString())}>
              <div className={styles.card}>
                <p className={styles.names}>
                  {contact.firstname} {contact.lastname}
                </p>
                <p className={styles.email}>{contact.email}</p>
                <p className={styles.birth}>{contact.birth}</p>
                <p className={styles.informations}>{contact.informations}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
