'use client'

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';

type Contacts = {
  id: string
  firstname: string
  lastname: string
  email: string
  birth: number
  informations: string
}

export default function Home() {

// TOGGLE THAT OPEN THE ADD FORM
const [formDisplay, setFormDisplay] = useState(false);

const toggleDisplayForm = () => {
  setFormDisplay(!formDisplay);
};

const formRef = useRef(null);

const handleSubmit = (e: any) => {
  e.preventDefault();

  const data = new FormData(
    formRef.current
  )

  const firstname = data.get('firstname')
  const lastname = data.get('lastname')
  const email = data.get('email')
  const birth = data.get('birth')
  const informations = data.get('informations')

  console.log(firstname, lastname, email, birth, informations);

  axios.post('http://localhost:8000/db',{
    firstname: firstname,
    lastname: lastname,
    email: email,
    birth: birth,
    informations: informations,
  })
  .then(response => {
    window.location.reload();
    console.log(response)
    return response
    
  })
  
  .catch(error => {
    console.error(error);
  });
}

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
    <main className={styles.main}>

      <div className={styles.inputs__main}>
        <input className={styles.search} type='search' placeholder='Search contact' />
        <button className={styles.add} onClick={toggleDisplayForm}>ADD CONTACT</button>
      </div>
      
{/* IL FAUDRA MAPPER SUR LES INFORMATIONS RECUENT */}
      {contacts && contacts.map(contact => (
        <div className={styles.book} key={contact.id}>
          <div className={styles.card} >
            <p className={styles.names}>{contact.firstname} {contact.lastname}</p>
            <p className={styles.email}>{contact.email}</p>
            <p className={styles.birth}>{contact.birth}</p>
            <p className={styles.informations}>{contact.informations}</p>
          </div>
        </div>
      ))}

      {formDisplay && (
          
          <div>
            {open && (
              <div className={styles.popup}>
                    
                <div className={styles.container__close}>
                  <button className={styles.close} onClick={toggleDisplayForm}>X</button>
                </div>

                <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
                  <div className={styles.inputs__form}>
                    <div className={styles.names}>
                      <label htmlFor='firstname'>
                        <input
                          className={styles.add__firstname}
                          type='text'
                          placeholder='Firstname'
                          name='firstname'
                          required
                        />
                      </label>
                      <label htmlFor='lastname'>
                        <input
                          className={styles.add__lastname}
                          type='text'
                          placeholder='Lastname'
                          name='lastname'    
                          required
                        />
                      </label>
                    </div>
                    <div className={styles.email}>
                      <label htmlFor='email'>
                        <input
                          className={styles.add__email}
                          type='text'
                          placeholder='Email'
                          name='email'                             
                          required
                        />
                      </label>
                    </div>
                    <div className={styles.birth}>
                      <label htmlFor="birth">
                        <input
                          className={styles.add__birth}
                          type='date'
                          placeholder='Date of birth'
                          name='birth'                            
                          required
                        />
                      </label>
                    </div>
                  </div>

                  <div className={styles.add__informations}>
                    <label className={styles.label__informations} htmlFor='informations'>
                      <textarea
                        className={styles.text__informations}
                        placeholder='Additional informations'
                        name='informations'
                      />
                    </label>
                  </div>

                  <div className={styles.buttons}>
                    <button
                      className={styles.save}
                      name='save'
                      type='submit'
                      onClick={handleSubmit}
                      >Save</button>
                    <button
                      className={styles.delete}
                      name='delete'
                      type='submit'>Delete</button>
                  </div>
                </form>
              </div>
            )}
          </div>

        )}


    </main>
  )
}
