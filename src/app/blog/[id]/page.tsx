import { getBlog } from '@/data/firebase';
import Link from 'next/link';
import React from 'react'

export default async function page({ params }: { params: { id: string } }) {
    const blog = await getBlog(params.id);
    return (
        <main className='m-4 md:flex md:flex-col md:justify-center md:items-center'>
            <div className='md:max-w-[700px]'>
                <div className='mb-3'>
                    <h1 className='text-2xl font-bold mb-5'>{blog.title}</h1>
                    <p className='text-lg font-medium'>{blog.body}</p>
                </div>
                <Link href='/blog'><button className='btn'>Back to blog</button></Link>
            </div>
        </main>
    )
}
