'use client'

import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {

// TOGGLE THAT OPEN THE ADD FORM
const [formDisplay, setFormDisplay] = useState(false);

const toggleDisplayForm = () => {
  setFormDisplay(!formDisplay);
};

// CROSS THAT CLOSE THE FORM
const [open, setOpen] = useState(true);

const handleOpen = () => {
    setOpen(false);
    };

// FUNCTIONS THAT RETRIEVE INFORMATIONS FROM THE ADD FORM
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [birth, setBirth] = useState('');
const [informations, setInformations] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
}

// VERIFY INFORMATIONS RECOVERY
console.log('Firstname:', firstname);
console.log('Lastname:', lastname);
console.log('Email:', email);
console.log('Date of birth:', birth);
console.log('Additional informations:', informations);

// RESET FORM FIELDS
// setFirstname('');
// setLastname('');
// setEmail('');
// setBirth('');
// setInformations('');

  return (
    <main className={styles.main}>

      <div className={styles.inputs__main}>
        <input className={styles.search} type="search" placeholder='Search contact' />
        <button className={styles.add} onClick={toggleDisplayForm}>ADD CONTACT</button>
        {formDisplay && (
          
          <div>
            {open && (
                <div className={styles.popup}>
                    
                    <div className={styles.container__close}>
                        <button className={styles.close} onClick={handleOpen}>X</button>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputs__form}>
                            <label htmlFor="firstname">
                              <input
                                className={styles.add__firstname}
                                type='text'
                                placeholder='Firstname'
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                required
                              />
                            </label>
                            <label htmlFor="lastname">
                              <input
                                className={styles.add__lastname}
                                type='text'
                                placeholder='Lastname'
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                required
                              />
                            </label>
                            <label htmlFor="email">
                              <input
                                className={styles.add__email}
                                type="text"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </label>
                            <label htmlFor="birth">
                              <input
                                className={styles.add__birth}
                                type="text"
                                placeholder='Date of birth'
                                value={birth}
                                onChange={(e) => setBirth(e.target.value)}
                                required
                              />
                            </label>
                        </div>

                        <div className={styles.add__informations}>
                          <label htmlFor="informations">
                            <textarea
                              className={styles.text__informations}
                              placeholder='Additional informations'
                              value={informations}
                              onChange={(e) => setInformations(e.target.value)}
                            />
                          </label>
                        </div>

                        <div className={styles.buttons}>
                            <button
                              className={styles.save}
                              name='save'
                              type='submit'>Save</button>
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

      </div>
{/* IL FAUDRA MAPPER SUR LES INFORMATIONS RECUENT */}
      <div className={styles.book}>
        <div className={styles.card}>
        <p className={styles.names}>FIRSTNAME LASTNAME</p>
          <p className={styles.email}>EXEMPLE@EMAIL.COM</p>
          <p className={styles.birth}>00/00/0000</p>
          <p className={styles.informations}>ADDITIONAL INFORMATIONS</p>
        </div>
      </div>

    </main>
  )
}
