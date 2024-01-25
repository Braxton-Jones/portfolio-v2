import React from 'react'
import styles from '../styles/aboutme.module.scss'

export default function AboutMe() {
    return (
        <section className={`${styles.aboutme} bento`}>
            <h2>About Me</h2>
            <div className={styles.aboutme_wrapper}>
                <p>
                    As a full-stack web developer, I love crafting immersive
                    online experiences. I find joy in creating innovative
                    solutions that resonate with users.{' '}
                    <span>
                        A blend of thoughtful design and a user-centric approach
                        is my guide for crafting compelling digital journeys.
                    </span>
                </p>
            </div>
        </section>
    )
}
