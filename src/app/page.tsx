'use client'

import styles from './page.module.css'
import Form from '../components/Form/form'
import { useState } from 'react'

export default function Home() {

  // TOGGLE THAT OPEN THE ADD FORM
  const [formDisplay, setFormDisplay] = useState(false);

  const toggleDisplayForm = () => {
    setFormDisplay(!formDisplay);
  };

  return (
    <main className={styles.main}>

      <div className={styles.inputs__main}>
        <input className={styles.search} type="search" placeholder='Search contact' />
        <button className={styles.add} onClick={toggleDisplayForm}>ADD CONTACT</button>
        {formDisplay && (
          <Form />
        )}
      </div>

      <div className={styles.book}>
        <div className={styles.card}>
          <p className={styles.names}>FIRSTNAME LASTNAME</p>
          <p className={styles.email}>EXAMPLE@EMAIL.COM</p>
          <p className={styles.birth}>00/00/0000</p>
        </div>
      </div>

      

    </main>
  )
}
