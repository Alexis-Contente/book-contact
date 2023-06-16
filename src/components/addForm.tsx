'use client'

// IMPORTS
import styles from '../app/page.module.css';
import { useState, useRef } from 'react';
import axios from 'axios';

type Props = {
    toggleDisplayForm: () => void
    formDisplay: boolean
} 

export default function AddForm(props: Props) {

    const { formDisplay, toggleDisplayForm} = props

// // TOGGLE THAT OPEN THE ADD FORM
// const [formDisplay, setFormDisplay] = useState(false);

// const toggleDisplayForm = () => {
//   setFormDisplay(!formDisplay);
// };

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

  axios.post('http://localhost:8000/db',
    {
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
};

    return (
        <>
            {formDisplay && (
                <div>
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
                                >
                            </input>
                            </label>
                            <label htmlFor='lastname'>
                            <input
                                className={styles.add__lastname}
                                type='text'
                                placeholder='Lastname'
                                name='lastname'  
                                required
                                >
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
                                required
                                >
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
                                required
                                >
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
                </div>
    
            )}
          </>
    )
}