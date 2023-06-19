'use client'

// IMPORTS
import styles from '../app/page.module.css';

type Props = {
    toggleDisplayModifyForm: () => void
    modifyFormDisplay: boolean
} 

export default function ModifyForm(props: Props) {

    const {modifyFormDisplay, toggleDisplayModifyForm} = props

    return (
        <>
            {modifyFormDisplay && (
                <div>
                    <div className={styles.popup}>
                            
                        <div className={styles.container__close}>
                            <button className={styles.close} onClick={toggleDisplayModifyForm}>X</button>
                        </div>
        
                        {/* <form className={styles.form} ref={formRef} onSubmit={handleSubmit}> */}
                        <form className={styles.form}>
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
                                >Modify</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}