import Link from 'next/link'
import React from 'react'

export default function MainPageButton() {
    return (
        <div>
            <div className='btn btn-primary'>
                <Link href={'/'}>←Main Page ⚙</Link>
            </div>
        </div>
    )
}
