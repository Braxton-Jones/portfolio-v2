import styles from '../styles/accents.module.scss'
const Accents = () => {
    return (
        <div className={styles.accents}>
            <div className={`${styles.accent} bento`}>
                <div className={styles.accent_wrapper}>
                    <h2>Need to know more?</h2>
                    <p>
                        If you're interested in learning more about my process,
                        exploring the projects I'm currently working on, or just
                        curious what I'm currently learning, be sure to visit my
                        blog! It's a space where I talk about the "why & how"
                        behind my projects and my software development journey
                    </p>
                </div>
                <button>
                    <a href='https://brx-blog-braxton-jones.vercel.app/'>
                        brx-blog
                    </a>
                </button>
            </div>
            <div className={`${styles.accent} bento`}>
                <div className={styles.accent_wrapper}>
                    <h2>Currently working on.</h2>
                    <p>
                        Currently I'm working on my new project, agilequest,
                        a agile task management tool that integrates features
                        inspired by popular gaming mechanics such as battle
                        passes, loot boxes, and dynamic daily and weekly
                        challenges, catering to individuals wanting an
                        entertaining approach to productivity.
                    </p>
                </div>
                <button>
                    <a href='https://github.com/Braxton-Jones'>My Repos</a>
                </button>
            </div>
        </div>
    )
}

export default Accents
