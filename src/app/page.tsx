'use client'

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import contactStore from './store';

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

// HANDLE THAT SAVE INFORMATIONS OF A NEW CONTACT
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

const store = contactStore();
console.log(store);
const {setFirstname, setLastname, setBirth, setEmail, setInformations} = contactStore();

const toggleDisplayFormContact = (contact: any) => {
  setFormDisplay(!formDisplay);
  // console.log(contact.firstname);
  setFirstname(contact.firstname);
  setLastname(contact.lastname);
  setBirth(contact.birth);
  setEmail(contact.email);
  setInformations(contact.informations);
}

// RETURN TO DISPLAY CONTACTS WITH MAPPING
  return (
    <main className={styles.main}>

      <div className={styles.inputs__main}>
        <input className={styles.search} type='search' placeholder='Search contact' />
        <button className={styles.add} onClick={toggleDisplayForm}>ADD CONTACT</button>
      </div>
      
      {contacts && contacts.map(contact => (
        <div className={styles.book} key={contact.id} onClick={()=>toggleDisplayFormContact(contact)}>
          <div className={styles.card} >
            <p className={styles.names}>{contact.firstname} {contact.lastname}</p>
            <p className={styles.email}>{contact.email}</p>
            <p className={styles.birth}>{contact.birth}</p>
            <p className={styles.informations}>{contact.informations}</p>
          </div>
        </div>
      ))}

{/* MODAL TO ADD A NEW CONTACT OR TO MODIFY AN EXISTING CONTACT */}
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
                          required>
                          {store.firstname ? store.firstname : '' }
                        </input>
                      </label>
                      <label htmlFor='lastname'>
                        <input
                          className={styles.add__lastname}
                          type='text'
                          placeholder='Lastname'
                          name='lastname'  
                          required>
                          {store.lastname ? store.lastname : '' }  
                        </input>
                      </label>
                    </div>
                    <div className={styles.email}>
                      <label htmlFor='email'>
                        <input
                          className={styles.add__email}
                          type='text'
                          placeholder='Email'
                          name='email'                            
                          required>
                          {store.email ? store.email : '' }
                        </input>
                      </label>
                    </div>
                    <div className={styles.birth}>
                      <label htmlFor="birth">
                        <input
                          className={styles.add__birth}
                          type='date'
                          placeholder='Date of birth'
                          name='birth'                            
                          required>
                          {store.birth ? store.birth : '' }
                        </input>
                      </label>
                    </div>
                  </div>

                  <div className={styles.add__informations}>
                    <label className={styles.label__informations} htmlFor='informations'>
                      <textarea
                        className={styles.text__informations}
                        placeholder='Additional informations'
                        name='informations'>
                        {store.informations ? store.informations : '' }
                      </textarea>
                    </label>
                  </div>

                  <div className={styles.buttons}>
                    <button
                      className={styles.save}
                      name='save'
                      type='submit'
                      // onClick={handleSubmit}
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
