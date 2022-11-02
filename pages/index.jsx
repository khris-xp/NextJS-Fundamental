import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head><title>{siteTitle}</title></Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I'm Khris Bharmmano. I want to be a Software Developer.</p>
        <p>You can contact to me on <a href="https://www.instagram.com/khris_xp/">Instagram</a></p>
      </section>
    </Layout>
  )
}
