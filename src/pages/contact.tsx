import React from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';

export default function Contact(): JSX.Element {
  return (
    <Layout title="聯絡我們" description="聯絡我們的方式">
      <header className={styles.header}>
        <div className="container">
          <h1>聯絡我們</h1>
          <p>如果你有任何問題或建議，請隨時聯絡我們。</p>
        </div>
      </header>
      <main>
        <section className={styles.contactSection}>
          <div className="container">
            <h2>聯絡資訊</h2>
            <p>你可以通過以下方式聯絡我們：</p>
            <ul>
              <li>電子郵件: <a href="mailto:contact@projectmars.info">contact@projectmars.info</a></li>
              <li>GitHub Issues: <a href="https://github.com/project-mars-tw/mars-dictionary/issues" target="_blank" rel="noopener noreferrer">提交 Issue</a></li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
