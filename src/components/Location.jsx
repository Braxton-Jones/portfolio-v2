import React, { useState, useEffect } from 'react'
import styles from '../styles/location.module.scss'
import boat from '../assets/boat.png'
import { motion } from 'framer-motion'

export default function Location() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    return (
        <section className={`${styles.location} bento`}>
            <motion.img
                src={boat}
                alt='boat'
                initial={{ opacity: 0, x: -100 }} // start from left
                animate={{ opacity: 1, x: 0 }} // animate to center
                exit={{ opacity: 0, x: 100 }} // exit to right
                transition={{ duration: 1 }} // animation duration
            />
            <div className={styles.location_wrapper}>
                <h2>
                    Located in <br />
                    Annapolis, Maryland
                </h2>
                <p>
                    GMT-5{' '}
                    <span className={styles.time}>
                        ( {hours}:{minutes}:{seconds} )
                    </span>
                </p>
            </div>
        </section>
    )
}
