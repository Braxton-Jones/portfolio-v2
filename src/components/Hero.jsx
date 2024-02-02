import React from 'react'
import styles from '../styles/hero.module.scss'
import '../styles/variables.scss'
import headshot from '../assets/headshot.png'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className={`${styles.hero} bento`}>
            <motion.img
                src={headshot}
                alt='headshot of Braxton Jones'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            ></motion.img>
            <p className={styles.hero_copy}>
                Braxton Jones is a full-stack web developer,
                <span>making unique experiences for the web.</span>
            </p>
        </section>
    )
}
