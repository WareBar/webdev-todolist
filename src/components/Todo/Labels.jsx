import styles from '../../styles/Labels.module.css'


const Labels = ({tasks}) => {
    return (
        <div className={styles.Labels}>
        
            <a href="#">
                <p className='labelitem'>
                    <span className={styles.text}>All</span>
                    <span className={styles.textCount}>0</span>
                </p>
            </a>

            <p className='labelitem'>
                <span className={styles.text}>Open</span>
                <span className={styles.textCount}>0</span>
            </p>

            <p className='labelitem'>
                <span className={styles.text}>Completed</span>
                <span className={styles.textCount}>0</span>
            </p>

            <p className='labelitem'>
                <span className={styles.text}>Deleted</span>
                <span className={styles.textCount}>0</span>
            </p>

        </div>
    )
}

export default Labels;