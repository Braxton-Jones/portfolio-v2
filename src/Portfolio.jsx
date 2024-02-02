import styles from './styles/layout.module.scss'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Toolkit from './components/Toolkit'
import AboutMe from './components/AboutMe'
import Location from './components/Location'
import Socials from './components/Socials'
import projects from './data'
import Accents from './components/Accents'
import { useState } from 'react'
import resume from './assets/BraxtonJonesResume.pdf'
import Project from './components/Project'
import { motion } from 'framer-motion'
export default function Portfolio() {
    return (
        <main>
            <motion.section
                className={styles.appWrapper}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                exit={{ opacity: 0 }}
            >
                <section
                    className={styles.navbar}
                    // initial={{ opacity: 0, y: -110 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5, delay: 1 }}
                    // exit={{ opacity: 0 }}
                >
                    <h1 className={styles.logo}>Braxton Jones.</h1>
                    <a href={resume} target='_blank' className={styles.resume}>
                        Resume / CV
                    </a>
                </section>

                <section className={styles.section_one}>
                    <Hero />
                    <div className={styles.section_one_wrapper}>
                        <Contact />
                        <Toolkit />
                    </div>
                </section>

                <section className={styles.section_two}>
                    <AboutMe />
                    <div className={styles.section_two_wrapper}>
                        <Location />
                        <Socials />
                    </div>
                </section>

                <section className={styles.section_two_point_five}>
                    <Accents />
                </section>

                <motion.section className={styles.section_three}>
                    <h2>Projects</h2>
                    <div className={styles.section_three_wrapper}>
                        {projects.map((project) => {
                            return (
                                <Project key={project.id} project={project} />
                            )
                        })}
                    </div>
                    {/* <div>
                    {projects.map((project) => {
                            return (
                                <Project key={project.id} project={project} />
                            )
                        })}
                    </div> */}
                </motion.section>

                <motion.footer className={styles.footer}>
                    <p>
                        Sketched with love in a Leuchtturm1917 journal, made
                        real in Visual Studio Code by yours truly. <br /> Made
                        using React + Sass + Framer Motion
                    </p>
                </motion.footer>
            </motion.section>
        </main>
    )
}
