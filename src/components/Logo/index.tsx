import styles from './styles.module.scss'

export function Logo(){ 
  return(
    <div className={styles.logoContainer}>
      <p>My</p>
      <span>STREAMING</span>
      <p>Time</p>
    </div>
  )
}