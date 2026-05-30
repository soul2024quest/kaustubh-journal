'use client'
import Link from 'next/link'
import Bubbles from '@/components/Bubbles'
import styles from '../introduction/introduction.module.css'

export default function AddictionsPage() {
  return (
    <div className={styles.root}>
      <Bubbles />

      <div className={styles.ripple} style={{ width: 450, height: 450, top: '8%', right: '-5%', animationDuration: '10s' }} />
      <div className={styles.ripple} style={{ width: 280, height: 280, bottom: '15%', left: '2%', animationDuration: '14s', animationDelay: '4s' }} />

      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <span className={styles.navSep}>›</span>
        <Link href="/pages" className={styles.navLink}>Pages</Link>
        <span className={styles.navSep}>›</span>
        <span className={styles.navCurrent}>Addictions</span>
      </nav>

      <article className={styles.article}>
        <div className={`glass ${styles.articleCard}`}>
          <div className={styles.cardShimmer} />

          <div className={styles.meta}>
            <span className={styles.metaLabel}>Page II</span>
            <span className={styles.metaDivider} />
            <span className={styles.metaLabel}>30 / 05 / 2026</span>
          </div>

          <h1 className={styles.title}>Addictions</h1>

          <div className={styles.rule}>
            <span />
            <span className={styles.ruleDot}>✦</span>
            <span />
          </div>

          <div className={styles.body}>
            <p>
              Hello. Today&apos;s date is 30/05/2026. I&apos;ve decided to document more about my life.
            </p>
            <p>
              Okay so, I&apos;ve decided to talk about my addiction today. I&apos;ve got a very serious porn addiction. Can&apos;t go a day without it. I don&apos;t know what to do — life&apos;s fucked up and all that.
            </p>
            <p>
              Jerking off is my coping mechanism I guess? I don&apos;t know, I&apos;m just a pathetic loser with no self-control or self-defense capabilities.
            </p>
            <p className={styles.aside}>
              And well, the internet. It&apos;s the only place where I can escape reality. Talk with people who don&apos;t judge me. Follow my interests. Try to love myself.
            </p>
            <p>
              I could rant on and on about my shit but this is about addictions — and no, I&apos;m not addicted to vapes, cigarettes, weed or anything — but it hurts that I&apos;ve got no stability or control over myself.
            </p>
          </div>

          <div className={styles.signoff}>
            <div className={styles.rule} style={{ marginBottom: '1.5rem' }}>
              <span />
              <span className={styles.ruleDot}>✦</span>
              <span />
            </div>
            <p className={styles.signoffText}>Signing off,</p>
            <p className={styles.signoffName}>Kaustubh.</p>
          </div>
        </div>

    <div className={styles.pageNav}>
  <Link href="/pages/introduction" className={styles.pageNavBtn}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
    Introduction
  </Link>
  <Link href="/pages" className={styles.pageNavBtn}>
    All Pages
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </Link>
</div>
  )
}
