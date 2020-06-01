import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>Independent Technologist, Bangalore</p>
//         <p>
//           JAMstacking with Next.js.
//         </p>
//       </section>
//       <footer>
//         <div>
//           <p>+ /twitter/<a href="https://twitter.com/theCuriousMonk" target="_blank">@theCuriousMonk</a></p>
//         </div>
//       </footer>
//     </Layout>
//   )
// }


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Building with Next.js</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Independent Technologist. Connect with me on <a target="_blank" href="https://twitter.com/thecuriousmonk">Twitter</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}