'use client'
import Link from 'next/link'
import Bubbles from '@/components/Bubbles'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Bubbles />
      <div className={styles.ripple} style={{ width: 500, height: 500, top: '10%', left: '60%', animationDuration: '8s' }} />
      <div className={styles.ripple} style={{ width: 320, height: 320, top: '55%', left: '5%', animationDuration: '11s', animationDelay: '3s' }} />
      <div className={styles.ripple} style={{ width: 200, height: 200, top: '75%', left: '75%', animationDuration: '7s', animationDelay: '1.5s' }} />
      <div className={styles.hero}>
        <div className={`glass ${styles.card}`}>
          <div className={styles.shimmer} />
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>Mental Health Archive</span>
            <span className={styles.eyebrowDot} />
          </div>
          <h1 className={styles.title}>
            Kaustubh&apos;s
            <br />
            <em>Journal</em>
          </h1>
          <p className={styles.subtitle}>
            A quiet place for thoughts, reflections,
            <br />
            and the record of an inner life.
          </p>
          <Link href="/pages" className={styles.enterBtn}>
            <span className={styles.enterBtnInner}>
              <span className={styles.enterBtnText}>Enter</span>
              <svg className={styles.enterArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
            <span className={styles.enterBtnGlow} />
          </Link>
        </div>
        <div className={`glass-subtle ${styles.dateBadge}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--aqua-deep)', flexShrink: 0 }}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>Est. 2025</span>
        </div>
        <div className={`glass-subtle ${styles.pagesBadge}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--aqua-deep)', flexShrink: 0 }}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10,9 9,9 8,9" />
          </svg>
          <span>2 pages</span>
        </div>
      </div>
    </main>
  )
}
