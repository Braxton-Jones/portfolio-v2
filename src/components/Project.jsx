import React from 'react'
import styles from '../styles/layout.module.scss'

export default function Project({ project }) {
    const {
        title,
        description,
        image,
        live_site_link,
        github_link,
        tags,
        status,
        blog_link,
    } = project
    console.log(status.message, 'status')
    return (
        <article className={styles.project}>
            <div className={styles.project_wrapper}>
                <div
                    className={styles.project_image}
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    <div className={styles.status}>
                        <p
                            style={{
                                color: status.color,
                                border: `1px solid ${status.color}`,
                                width: 'fit-content',
                                padding: '0.2rem 1rem',
                                borderRadius: '15px',
                            }}
                        >
                            {status.message}
                        </p>
                    </div>
                </div>
                <div className={styles.project_info}>
                    <h3>{title}</h3>
                    <p>{description}</p>

                    <div className={styles.project_tags}>
                        {tags.map((tag) => {
                            return (
                                <span key={tag} className={styles.project_tag}>
                                    {tag}
                                </span>
                            )
                        })}
                    </div>
                    <div className={styles.project_links}>
                        <div className={styles.project_links}>
                            {live_site_link !== '' && (
                                <a
                                    href={live_site_link}
                                    target='_blank'
                                    className={styles.project_link}
                                >
                                    Live Site
                                </a>
                            )}
                            {github_link !== '' && (
                                <a
                                    href={github_link}
                                    target='_blank'
                                    className={styles.project_link}
                                >
                                    Github
                                </a>
                            )}
                            {blog_link !== '' && (
                                <a
                                    href={blog_link}
                                    target='_blank'
                                    className={styles.project_link}
                                >
                                    Blog Post
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
