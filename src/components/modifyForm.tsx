'use client';

// IMPORTS
import styles from '../app/page.module.css';
import axios from 'axios';
import { useState } from 'react';

// TYPE PROPS
type Props = {
  modifyFormDisplay: boolean;
  toggleDisplayModale: () => void;
  user: User | null;
};

// TYPE USER
type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birth: any;
  informations: string;
};

export default function ModifyForm(props: Props) {
  const { modifyFormDisplay, toggleDisplayModale, user } = props;
  // console.log(props);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [informations, setInformations] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (user) {
        await axios.put(`http://localhost:8000/db/${user.id}`, { firstname, lastname, email, birth, informations });
        window.location.reload();
        console.log('Contact updated');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (e: any) => {
    e.preventDefault();
    try {
      if (user) {
        await axios.delete(`http://localhost:8000/db/${user.id}`);
        window.location.reload();
        console.log('Contact deleted');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {modifyFormDisplay && (
        <div>
          <div className={styles.popup}>
            <div className={styles.container__close}>
              <button className={styles.close} onClick={toggleDisplayModale}>
                X
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputs__form}>
                <div className={styles.names}>
                  <label htmlFor="firstname">
                    {props.user?.firstname}
                    <input className={styles.add__firstname} type="text" placeholder="Firstname" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required></input>
                  </label>
                  <label htmlFor="lastname">
                    {props.user?.lastname}
                    <input className={styles.add__lastname} type="text" placeholder="Lastname" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required></input>
                  </label>
                </div>
                <div className={styles.email}>
                  <label htmlFor="email">
                    {props.user?.email}
                    <input className={styles.add__email} type="text" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                  </label>
                </div>
                <div className={styles.birth}>
                  <label htmlFor="birth">
                    {props.user?.birth}
                    <input className={styles.add__birth} type="date" placeholder="Date of birth" name="birth" value={birth} onChange={(e) => setBirth(e.target.value)} required></input>
                  </label>
                </div>
              </div>

              <div className={styles.add__informations}>
                <label className={styles.label__informations} htmlFor="informations">
                  <textarea className={styles.text__informations} placeholder="Additional informations" defaultValue={props.user?.informations} name="informations" value={informations} onChange={(e) => setInformations(e.target.value)}></textarea>
                </label>
              </div>

              <div className={styles.buttons}>
                <button className={styles.save} name="save" type="submit">
                  Modify
                </button>
                <button className={styles.delete} name="delete" type="button" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
