import React from 'react'
import { useMutation, useState } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import styled from 'styled-components'

const POST_MUTATION = gql`
    mutation PostMutation($title: String!, $content: String!) {
        post(title: $title, content: $content) {
            id
            content
            title
        }
    }
`

function CreatePost() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                type='text'
                placeholder='post title'
            />

            <input 
                value={content}
                onChange={e => setContent(e.target.value)}
                type='text'
                placeholder='post content'
            />

            <button onClick={}>
                Submit
            </button>
        </div>
    )
}

export default CreatePost