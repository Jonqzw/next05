import React from 'react'
import Link from 'next/link'
type Props = {
    result: Result
}

export default function item({ result } : Props) {
    const itemTextCol = (
        <div className='flex flex-col justify-center'>
            <h2>
                <Link href={`https://en.wikipedia.org/?curid=curid=${result.pageId}`} target="_blank" 
                className='text-xl font-bold underline'>{result.title}
                </Link>
            </h2>
            <p>{result.extract}</p>
        </div>
    )

    const content = result?.thumbmail?.source
    ?(
        <article className='m-4 max-w-lg'>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col justify-center'>
                    <img src={result.thumbmail.source} 
                    alt={result.title} 
                    width={result.thumbmail.width} 
                    height={result.thumbmail.height}
                    loading='lazy'/>
                </div>
                {itemTextCol}
            </div>
        </article>
    )
    : (
        <article className='m-4 max-w-lg'>
            {itemTextCol}
        </article>
    )
    return content
}