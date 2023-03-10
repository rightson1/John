import RichText from '../RichText'

const PostBody = ({ post }) => {
    const { content } = post.fields

    return (

        <div className='max-w-none prose my-5'>
            <RichText content={content} />
        </div>
    )
}

export default PostBody