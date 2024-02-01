import styles from '../styles/accents.module.scss'
const Accents = () => {
    return (
        <div className={styles.accents}>
            <div className={`${styles.accent} bento`}>
                <div className={styles.accent_wrapper}>
                    <h2>Need to know more?</h2>
                    <p>
                        I have a blog where I delve deeper into the processes
                        behind creating my projects. Feel free to give it a
                        look!
                    </p>
                </div>
                <button>brx-blog</button>
            </div>
            <div className={`${styles.accent} bento`}>
                <div className={styles.accent_wrapper}>
                    <h2>Currently working on.</h2>
                    <ul>
                        <li>✨ Learning Next.js by building soloprojdev</li>
                        <li>✨ Reading through GSAP Docs</li>
                    </ul>
                </div>
                <button>more about solodev</button>
            </div>
        </div>
    )
}

export default Accents
