import React from 'react'
import { IArticle } from '../types'
import Blogcard from './Blogcard'

interface IPropType {
    articles: IArticle[]
}
export default function ArticleList({ articles }: IPropType) {
    return (
        <div className='grid lg:grid-cols-2 mt-5 lg:gap-10 gap-5'>
            {
                articles.map((article) => {
                    return (
                        <>
                            <div key={article.id}>
                                <Blogcard article={article} />
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}
