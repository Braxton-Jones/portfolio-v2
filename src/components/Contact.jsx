import React from 'react'
import styles from '../styles/contact.module.scss'
import '../styles/variables.scss'
import accent from '../assets/accent.svg'

export default function Contact() {
    return (
        <section className={`${styles.contact} bento`}>
            <h3>Let's work together!</h3>
            <img src={accent} alt='accent' />
            <a
                className={styles.contact_button}
                href='mailto:braxtonjonesdev@gmail.com'
            >
                braxtonjonesdev@gmail.com
            </a>
        </section>
    )
}
