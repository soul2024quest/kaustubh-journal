'use client'
import Link from 'next/link'
import Bubbles from '@/components/Bubbles'
import styles from './pages.module.css'

const pages = [
  {
    slug: 'introduction',
    title: 'Introduction',
    excerpt: 'Hey, I HAVE to congratulate you for finding this page…',
    date: '29 / 05 / 2026',
    icon: '✦',
  },
]

export default function PagesIndex() {
  return (
    <div className={styles.root}>
      <Bubbles />

      <div className={styles.ripple} style={{ width: 400, height: 400, top: '5%', right: '8%', animationDuration: '9s' }} />
      <div className={styles.ripple} style={{ width: 250, height: 250, bottom: '10%', left: '5%', animationDuration: '13s', animationDelay: '2s' }} />

      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          Home
        </Link>

        <div className={styles.headerCenter}>
          <p className={styles.headerEyebrow}>Archive</p>
          <h1 className={styles.headerTitle}>Kaustubh&apos;s <em>Journal</em></h1>
        </div>

        <div className={styles.headerRight}>
          <span className={`glass-subtle ${styles.countBadge}`}>{pages.length} {pages.length === 1 ? 'page' : 'pages'}</span>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {pages.map((page, i) => (
            <Link
              key={page.slug}
              href={`/pages/${page.slug}`}
              className={`glass ${styles.pageCard}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.cardShimmer} />
              <div className={styles.cardIcon}>{page.icon}</div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{page.title}</h2>
                <p className={styles.cardExcerpt}>{page.excerpt}</p>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.cardDate}>{page.date}</span>
                <svg className={styles.cardArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>A quiet space of one&apos;s own.</p>
      </footer>
    </div>
  )
}
