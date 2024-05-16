import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">火星辭典</h1>
        <p className="hero__subtitle">一個精確且易於使用的資源，幫助地球人快速查找和學習新詞彙</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            開始使用
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <Link to={link}>了解更多</Link>}
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="辭典專案"
      description="一個全面且易於使用的辭典資源">
      <HomepageHeader />
      <main>
        <section className={styles.popularTerms}>
          <div className="container">
            <h2>熱門詞條</h2>
            <ul>
              <li><Link to="/docs/會議/遲到">遲到</Link></li>
              <li><Link to="/docs/會議/誤差範圍">誤差範圍</Link></li>
              <li><Link to="/docs/會議/嚴重遲到">嚴重遲到</Link></li>
            </ul>
          </div>
        </section>
        <section className={styles.contact}>
          <div className="container">
            <h2>聯絡我們</h2>
            <p>如果你有任何問題或建議，請通過<Link to="/contact">聯絡頁面</Link>與我們聯絡。</p>
          </div>
        </section>
        <section className={styles.community}>
          <div className="container">
            <h2>社群和支持</h2>
            <p>加入我們的<Link to="https://www.facebook.com/Booster.Mars">討論區</Link>，分享你的想法，或在<Link to="https://github.com/project-mars-tw/mars-dictionary/issues">GitHub Issues</Link>報告問題。</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
