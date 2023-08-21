import { AxiosResponse } from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import Tabs from '../components/Tabs'
import { fetchArticles, fetchCategories } from '../http'
import { IArticle, ICategory, ICollectionResponse, IPagination, IQueryOptions } from '../types'
import qs from 'qs'
import Pagination from '../components/Pagination'
import { useRouter } from 'next/router'
import { debounce } from '../utils'


interface IPropTypes {
  categories: {
    items: ICategory[]
  }
  articles: {
    items: IArticle[],
    pagination: IPagination
  }
}


const Home: NextPage<IPropTypes> = ({ categories, articles }) => {

  const { page, pageCount } = articles.pagination;

  const router = useRouter();
  const handleSearch = (query: string) => {
    router.push(`/?search=${query}`)
  }

  return (
    <>
      <Head>
        <title>Strapi Blog</title>
        <meta name="description" content="Strapi Blog app using Nextjs and Typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tabs categories={categories.items} handleOnSearch={debounce(handleSearch, 1500)} />
      <ArticleList articles={articles.items} />
      <Pagination page={page} pageCount={pageCount} />

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  //articles
  const options: Partial<IQueryOptions> = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 6,
    }
  }


  if (query.search) {
    options.filters = {
      Title: {
        $containsi: query.search,
      }
    }
  }

  const queryString = qs.stringify(options);

  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);

  //categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();


  return {
    props: {
      categories: {
        items: categories.data
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      }
    }

  }
}

export default Home