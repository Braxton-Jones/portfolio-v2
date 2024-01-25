import React from 'react'
import styles from '../styles/socials.module.scss'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.05,
        },
    },
}

const childVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
}

import resumeIcon from '../assets/resume.png'
export default function Socials() {
    return (
        <section className={`${styles.socials} bento`}>
            <h2>See what I'm up to...</h2>
            <motion.div
                className={styles.socials_wrapper}
                variants={variants}
                initial='hidden'
                animate='show'
            >
                <motion.p align='center' variants={childVariants}>
                    <a href='https://github.com/Braxton-Jones' target='_blank'>
                        <img src='https://skillicons.dev/icons?i=github' />
                    </a>
                </motion.p>

                <motion.p align='center' variants={childVariants}>
                    <a
                        href='https://www.linkedin.com/in/braxtonjonesdev/'
                        target='_blank'
                    >
                        <img src='https://skillicons.dev/icons?i=linkedin' />
                    </a>
                </motion.p>

                <motion.p align='center' variants={childVariants}>
                    <a href='https://twitter.com/bx_jones' target='_blank'>
                        <img src='https://skillicons.dev/icons?i=twitter' />
                    </a>
                </motion.p>
            </motion.div>
        </section>
    )
}
