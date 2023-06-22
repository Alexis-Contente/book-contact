'use client';

// IMPORTS
import styles from '../app/page.module.css';

type Props = {
  toggleDisplayForm: () => void;
};
// export default function SearchBar<Props>({toggleDisplayForm}) {
export default function SearchBar(props: Props) {
  const { toggleDisplayForm } = props;

  return (
    <div className={styles.inputs__main}>
      <input className={styles.search} type="search" placeholder="Search contact" />
      <button className={styles.add} onClick={toggleDisplayForm}>
        ADD CONTACT
      </button>
    </div>
  );
}
