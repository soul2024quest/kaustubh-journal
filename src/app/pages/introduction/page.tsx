'use client'
import Link from 'next/link'
import Bubbles from '@/components/Bubbles'
import styles from './introduction.module.css'

export default function IntroductionPage() {
  return (
    <div className={styles.root}>
      <Bubbles />

      <div className={styles.ripple} style={{ width: 450, height: 450, top: '8%', right: '-5%', animationDuration: '10s' }} />
      <div className={styles.ripple} style={{ width: 280, height: 280, bottom: '15%', left: '2%', animationDuration: '14s', animationDelay: '4s' }} />

      {/* Nav breadcrumb */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <span className={styles.navSep}>›</span>
        <Link href="/pages" className={styles.navLink}>Pages</Link>
        <span className={styles.navSep}>›</span>
        <span className={styles.navCurrent}>Introduction</span>
      </nav>

      <article className={styles.article}>
        <div className={`glass ${styles.articleCard}`}>
          <div className={styles.cardShimmer} />

          {/* Meta */}
          <div className={styles.meta}>
            <span className={styles.metaLabel}>Page I</span>
            <span className={styles.metaDivider} />
            <span className={styles.metaLabel}>29 / 05 / 2026</span>
          </div>

          {/* Title */}
          <h1 className={styles.title}>My Mental Health</h1>

          {/* Decorative rule */}
          <div className={styles.rule}>
            <span />
            <span className={styles.ruleDot}>✦</span>
            <span />
          </div>

          {/* Body text — Kaustubh's own words */}
          <div className={styles.body}>
            <p>
              Hey, I HAVE to congratulate you for finding this page. This is well… I&apos;ll go by the name Kaustubh, the date is 29/05/2026. I&apos;m 14 at the time and documenting my mental health.
            </p>

            <p>
              I can&apos;t afford to buy a domain and stuff so this is an introduction lol. Here&apos;s a runthrough of my life.
            </p>

            <ul className={styles.list}>
              <li>I&apos;m a useless piece of shit bullied at school</li>
              <li>I hate my life</li>
              <li>Wish I could go back in time and fix myself</li>
            </ul>

            <p className={styles.aside}>
              Funny. We all have our moments of despair — it&apos;s just that mine never seems to end does it?
            </p>

            <p>
              Anyways, my grandparents want me out of the house. I&apos;ve got a shitty dad. I need someone to talk to but I don&apos;t have anyone and I can&apos;t put my personal phone number on this website or I&apos;ll get thousands of calls.
            </p>

            <p>
              Well I don&apos;t know how long I&apos;ll publish here — maybe I forget about this and stuff — but hey, if you find this: welcome to my fucked up life!
            </p>
          </div>

          {/* Sign-off */}
          <div className={styles.signoff}>
            <div className={styles.rule} style={{ marginBottom: '1.5rem' }}>
              <span />
              <span className={styles.ruleDot}>✦</span>
              <span />
            </div>
            <p className={styles.signoffText}>Signing Off,</p>
            <p className={styles.signoffName}>Kaustubh.</p>
          </div>
        </div>

        {/* Page nav */}
        <div className={styles.pageNav}>
          <Link href="/pages" className={styles.pageNavBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            All Pages
          </Link>
          <span className={styles.pageNavHint}>More pages coming soon</span>
        </div>
      </article>
    </div>
  )
}
