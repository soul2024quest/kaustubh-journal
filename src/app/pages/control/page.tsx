'use client'
import Link from 'next/link'
import Bubbles from '@/components/Bubbles'
import styles from '../introduction/introduction.module.css'

export default function ControlPage() {
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
        <span className={styles.navCurrent}>Control</span>
      </nav>
      <article className={styles.article}>
        <div className={`glass ${styles.articleCard}`}>
          <div className={styles.cardShimmer} />
          <div className={styles.meta}>
            <span className={styles.metaLabel}>Page III</span>
            <span className={styles.metaDivider} />
            <span className={styles.metaLabel}>01 / 06 / 2026</span>
          </div>
          <h1 className={styles.title}>Control</h1>
          <div className={styles.rule}>
            <span />
            <span className={styles.ruleDot}>✦</span>
            <span />
          </div>
          <div className={styles.body}>
            <p>Hey, Kaustubh again. Today&apos;s date is 01/06/2026.</p>
            <p>Yk, some parents can&apos;t just let their kids be. They need to control every fucking second of their lives. Yeah, yeah — &quot;It&apos;s just instincts&quot;, &quot;They&apos;re just tryna protect you&quot;. Sure. But like I need some goddamn privacy too?</p>
            <p>I don&apos;t have a lock on my room. I&apos;ve got parental controls on my phone even though I&apos;m 14. That&apos;s right. F-O-U-R-T-E-E-N. It&apos;s not like I&apos;m goddamn eight anymore??</p>
            <p className={styles.aside}>Like my mom needs to STOP. I&apos;M IN HIGHSCHOOL. I&apos;ll graduate at 17 and I&apos;m done. I&apos;m actually so. fucking. done.</p>
            <p>I&apos;ve got two more years of school and then I&apos;m probably gonna go to the US for higher studies — but hey, she wants to control every goddamn second of my life.</p>
            <p>This just genuinely pisses me off. I&apos;m saving up to run away if it genuinely gets unbearable. Like all I want is for her to let me be on my phone for at least 4 hours — but NO. She only wants me on my phone for like… 2 hours? That&apos;s barely enough to do anything.</p>
            <p>That&apos;s it I guess lmfao.</p>
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
          <Link href="/pages/addictions" className={styles.pageNavBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Addictions
          </Link>
          <Link href="/pages" className={styles.pageNavBtn}>
            All Pages
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  )
}
