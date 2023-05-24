import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.inputs__main}>
        <input className={styles.search} type="search" placeholder='Search contact' />
        <button className={styles.add}>ADD CONTACT</button>
      </div>

      <div className={styles.book}>
        <div className={styles.card}>
          <p className={styles.names}>FIRSTNAME LASTNAME</p>
          <p className={styles.email}>EXAMPLE@EMAIL.COM</p>
          <p className={styles.birth}>00/00/0000</p>
        </div>
      </div>

      <div className={styles.popup}>

        <div className={styles.container__close}>
          <div className={styles.close}>X</div>
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

    </main>
  )
}
