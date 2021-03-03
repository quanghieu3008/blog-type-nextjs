
import Cards from '../components/Cards';
import { Pagination } from 'antd'
import Layout from './../components/Layout';
import 'antd/dist/antd.css'
import styles from '../styles/index.module.css'
import { useState } from 'react';
import Header from '../components/Header';
let client: any = require('contentful').createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
    let data: any = await client.getEntries({
        content_type: 'blogNextjs'
    })
    return {
        props: {
            articles: data.items
        }
    }
}
const maxValue = 4

const IndexPage = ({ articles }: any) => {
    const [activePage, setActivePage] = useState(0)
    const [totalPage, setTotalPage] = useState(1)
    const [check, setCheck] = useState(false)
    console.log(articles, "log ger");
    const handleChangePagination = (active: number) => {
        setActivePage((active - 1) * maxValue)
        setTotalPage(active * maxValue)
        setCheck(true)
    }

    return (
        <Layout>
            <Header />
            <div className={styles.divCard} >

                {
                    articles?.slice(activePage, !check ? maxValue : totalPage).map((items: object, key: number) => (
                        <Cards key={key} items={items} />
                    ))

                }
            </div>
            <div className={styles.pagination}>
                <Pagination
                    defaultCurrent={1}
                    defaultPageSize={maxValue} //default size of page
                    onChange={handleChangePagination}
                    total={articles.length} //total number of card data available
                />

            </div>
        </Layout>

    )
}

export default IndexPage
