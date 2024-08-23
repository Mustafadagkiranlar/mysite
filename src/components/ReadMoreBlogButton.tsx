import Link from 'next/link'
import React from 'react'

export default function ReadMoreBlogButton({link}: {link: string}) {
  return (
    <div className='my-2'>
      <Link href={link}>
        <button className='btn'>
            Read More →
        </button>
    </Link>
    </div>
  )
}
