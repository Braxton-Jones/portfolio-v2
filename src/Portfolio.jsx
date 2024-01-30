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
export default function Portfolio() {
    return (
        <main>
            <section className={styles.appWrapper}>
                <section className={styles.navbar}>
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
                    <Accents/>
                </section>
                <section className={styles.section_three}>
                    <h2>Projects</h2>
                    <div className={styles.section_three_wrapper}>
                        {projects.map((project) => {
                            return <Project key={project.id} project={project} />
                        })}
                    </div>
                </section>

                <footer className={styles.footer}>
                    <p>
                        Sketched with love in a Leuchtturm1917 journal, made real
                        in Visual Studio Code by yours truly. <br/> Made using React +
                        Sass + Framer Motion
                    </p>
                </footer>
            </section>
        </main>
    )
}
