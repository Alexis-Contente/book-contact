'use client'

// IMPORTS
import styles from '../app/page.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

type Props = {
  toggleDisplayModifyForm: () => void
}

export default function ListContacts(props: Props) {

const {toggleDisplayModifyForm} = props

// TYPE CONTACT
type Contacts = {
    id: string
    firstname: string
    lastname: string
    email: string
    birth: number
    informations: string
  }

// FUNCTION THAT GET INFORMATIONS OF CONTACTS FOR DISPLAY
const [contacts, setContacts] = useState<Contacts[] | null>(null);

const contactsData = async () => {
  axios.get('http://localhost:8000/db')
    .then(response => {
      setContacts(response.data.db);
      console.log(response.data.db);
    })
    .catch(error => {
      console.error(error);
    });
}

useEffect(() => {
  contactsData();
}, [])

    return (
      <>
        {contacts && contacts.map(contact => (
          <div className={styles.book} key={contact.id} onClick={toggleDisplayModifyForm}>
            <div className={styles.card} >
                <p className={styles.names}>{contact.firstname} {contact.lastname}</p>
                <p className={styles.email}>{contact.email}</p>
                <p className={styles.birth}>{contact.birth}</p>
                <p className={styles.informations}>{contact.informations}</p>
              </div>
            </div>
        ))}
      </>
    )
}