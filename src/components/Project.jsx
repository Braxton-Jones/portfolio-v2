import React from 'react'
import styles from '../styles/layout.module.scss'
export default function Project({project}) {
    const {
        title,
        description,
        image,
        live_site_link,
        github_link,
        tags,
        status,
        blog_link
      } = project
    return <article className={styles.project}>
  <div className={styles.project_wrapper}>
    <div className={styles.project_image}>
      <img src={image} alt={title} />
    </div>
    <div className={styles.project_info}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.project_links}>
        <a href={live_site_link} target='_blank' className={styles.project_link}>
          Live Site
        </a>
        <a href={github_link} target='_blank' className={styles.project_link}>
          Github
        </a>
        <a href={blog_link} target='_blank' className={styles.project_link}>
          Blog
        </a>
      </div>
      <div className={styles.project_tags}>
        {tags.map((tag) => {
          return <span key={tag} className={styles.project_tag}>{tag}</span>
        })}
      </div>
      <div className={styles.project_status}>
        <p>{status}</p>
      </div>
    </div>
  </div>
</article>


}
