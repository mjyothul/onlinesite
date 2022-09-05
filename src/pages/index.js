/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Application Development',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Our team uses the extensive use of AI and ML concepts in 
        applications with best UX and responsive over a varied number 
        of platforms and devices 
        – Desktop and Mobile across multiple channels..
      </>
    ),
  },
  {
    title: 'Product Research',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Our research starts from analytics to the blockchain 
        enabling the clients with the modern technologies and 
        processes to expand and excel in their business.
      </>
    ),
  },
  {
    title: 'Analytics support',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Our team supports all kinds of Analytics and reporting 
        with esteem industry specific standards. We integrate 
        machine learning, deep learning, artificial neural networks 
        and natural language processing in development of the IT infrastructure. 
        We process the chunks of tasks that can be performed with Robotic process automation.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Welcome</h1>
          <p className="hero__subtitle"> AI Bolster is a focused AI and ML-based problem-solving organization that will change the entire bass for the productivity of the business flows.</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('https://share.hsforms.com/13sC-8ZsHRkO_KQJfVbR32wdh1en')}>
              Contact us
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
