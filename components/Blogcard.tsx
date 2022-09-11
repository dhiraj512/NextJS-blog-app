import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { IArticle } from '../types'
import { formatDate } from '../utils';

interface IPropType {
    article: IArticle;
}

const Blogcard = ({ article }: IPropType) => {
    return (
        <Link href={`/article/${article.attributes.Slug}`}>
            <div className='bg-white border-l-4 border-primary duration-300 border-opacity-50 p-2 rounded-md hover:shadow-lg '>
                <div className='cursor-pointer'>

                    <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
                        {article.attributes.Title}
                    </h1>
                    <div className="text-gray-500 font-medium">
                        {article.attributes.shortDescription.slice(0, 100)}{' '}
                        <span className='text-primary'>
                            {article.attributes.shortDescription.length > 100 ? '... read more' : ''}
                        </span>
                    </div>
                </div>
                <div className="flex items-center my-2">
                    <div className="rounded-full overflow-hidden flex items-center justify-center mr-1">
                        <Image
                            src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                            height={20}
                            width={20}
                        />
                    </div>
                    <span className="text-sm font-medium text-gray-400">
                        {article.attributes.author.data.attributes.firstname}{' '}
                        {article.attributes.author.data.attributes.lastname} on
                        &nbsp;
                        <span>
                            {formatDate(article.attributes.createdAt)}
                        </span>
                    </span>
                </div>

            </div>
        </Link>
    );
};

export default Blogcard;