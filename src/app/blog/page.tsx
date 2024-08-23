import React from 'react'
import { getBlogs } from '../../data/firebase'
import MainPageButton from '@/components/MainPageButton'
import ReadMoreBlogButton from '@/components/ReadMoreBlogButton'

export default async function page() {
    const blogs = await getBlogs()
    return (
        <main className='m-4'>
            <MainPageButton />
            <div className='flex flex-col justify-center items-center '>
                {blogs.map((blog) => (
                    <div key={blog.id.toString()} className='my-4 space-y-2 md:max-w-[500px]'>
                        <p className="font-semibold text-lg">{blog.title}</p>
                        <p className='line-clamp-5'>{blog.body}</p>
                        <ReadMoreBlogButton link={`/blog/${blog.id}`} />
                    </div>
                ))}
            </div>
        </main>
    )
}
