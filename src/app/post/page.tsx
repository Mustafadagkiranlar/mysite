import React from 'react'

export default function page() {
    async function createPost() {

    }
    return (
        <form action="">
            <label className="form-control w-full max-w-xs my-4">
                <div className="label">
                    <span className="label-text">Title</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered max-w-xs" />
            </label>
            <textarea className="textarea textarea-bordered" placeholder="Content"></textarea>
        </form>
    )
}
