import React from 'react'
import styles from '../styles/hero.module.scss'
import '../styles/variables.scss'
import headshot from '../assets/headshot.png'

export default function Hero() {
    return (
        <section className={`${styles.hero} bento`}>
            <img src={headshot} alt='headshot of Braxton Jones' />
            <p className={styles.hero_copy}>
                Braxton Jones is a full-stack web developer,{' '}
                <span>crafting unique experiences for the web.</span>
            </p>
        </section>
    )
}
