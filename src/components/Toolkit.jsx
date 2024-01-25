import React from 'react'
import styles from '../styles/toolkit.module.scss'
import '../styles/variables.scss'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.05,
        },
    },
}

const childVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
}

export default function Toolkit() {
    return (
        <section className={`${styles.toolkit} bento`}>
            <h2>What I Love Using...</h2>
            <motion.div
                className={styles.toolkit_wrapper}
                variants={variants}
                initial='hidden'
                animate='show'
            >
                <motion.p align='center' variants={childVariants}>
                    <img src='https://skillicons.dev/icons?i=nodejs' />
                </motion.p>

                <motion.p align='center' variants={childVariants}>
                    <img src='https://skillicons.dev/icons?i=express' />
                </motion.p>

                <motion.p align='center' variants={childVariants}>
                    <img src='https://skillicons.dev/icons?i=mongodb' />
                </motion.p>

                <motion.p align='center' variants={childVariants}>
                    <img src='https://skillicons.dev/icons?i=react' />
                </motion.p>

                <motion.p align='center' variants={childVariants}>
                    <img src='https://skillicons.dev/icons?i=redux' />
                </motion.p>

                <motion.p align='center' variants={childVariants}>
                    <img src='https://skillicons.dev/icons?i=nextjs' />
                </motion.p>

                <motion.p align='center' variants={childVariants}>
                    <img src='https://skillicons.dev/icons?i=prisma' />
                </motion.p>

                <motion.p align='center' variants={childVariants}>
                    <img src='https://skillicons.dev/icons?i=postgres' />
                </motion.p>

                <motion.p align='center' variants={childVariants}>
                    <img src='https://skillicons.dev/icons?i=postman' />
                </motion.p>

                <motion.p align='center' variants={childVariants}>
                    <img src='https://skillicons.dev/icons?i=sass' />
                </motion.p>
            </motion.div>
        </section>
    )
}
