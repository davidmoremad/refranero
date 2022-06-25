import styles from '../styles/Home.module.css'

export default function Banner({ refran }) {
  return (
    <>
      <h2 className={styles.subtitle}>Refran aleatorio:</h2>
      <h3 className={styles.subtitle}>{ refran }</h3>
    </>
  )
}