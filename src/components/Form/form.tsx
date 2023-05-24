import styles from '../../app/page.module.css';
import { useState } from 'react'

export default function Form() {

// CROSS THAT CLOSE THE FORM
const [open, setOpen] = useState(true);

const handleOpen = () => {
    setOpen(false);
    };

    return (
        <div>
            {open && (
                <div className={styles.popup}>
                    
                    <div className={styles.container__close}>
                        <button className={styles.close} onClick={handleOpen}>X</button>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.inputs__form}>
                            <input className={styles.add__firstname} type="text" placeholder='Firstname' />
                            <input className={styles.add__lastname} type="text" placeholder='Lastname'/>
                            <input className={styles.add__email} type="text" placeholder='Email'/>
                            <input className={styles.add__birth} type="text" placeholder='Date of birth'/>
                        </div>

                        <div className={styles.add__informations}>
                            <textarea className={styles.text__informations} placeholder='Additional informations' />
                        </div>

                        <div className={styles.buttons}>
                            <button className={styles.save}>Save</button>
                            <button className={styles.delete}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

