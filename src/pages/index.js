import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import AboutMe from '../components/AboutMe';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`About me`}
      description="My personal blog about tech, programming and anything I'm interested in.">
      <main>
        <AboutMe />
      </main>
    </Layout>
  );
}
