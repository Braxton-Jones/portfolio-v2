import styles from '../styles/accents.module.scss'
const Accents = ({ openModal }) => {
    return (
        <div className={styles.accents}>
            <div className={`${styles.accent} bento`}>
                <div className={styles.accent_wrapper}>
                    <h2>Need to know more?</h2>
                </div>
                <button onClick={openModal}>Learn More</button>
            </div>
            <div className={`${styles.accent} bento`}>
                <div className={styles.accent_wrapper}>
                    <h2>What I'm working on.</h2>
                </div>
                <button>Current Proj</button>
            </div>
        </div>
    )
}

export default Accents
