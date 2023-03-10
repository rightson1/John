import PostBody from '../../components/posts/PostBody'
import PostHeader from '../../components/posts/PostHeader'
import PreviewAlert from '../../components/ui/PreviewAlert'
import Skeleton from '../../components/ui/Skeleton'
import { client, previewClient } from '../../lib/client'
import { useRouter } from 'next/router'
import Divider from '@mui/material/Divider';

const Post = ({ post, preview }) => {
    const router = useRouter();
    console.log(post)

    return (
        <section className='py-10'>
            <div className="flex w-full justify-center md:my-10 p-10">
                <div className="w-full max-w-[900px]">
                    <div className="h-[2px] w-full  bg-[rgba(0,0,0,.3)]"></div>
                </div>
            </div>


            {preview && <PreviewAlert />}
            <div className='w-full flex justify-center  px-10'>
                <article className='max-w-[900px]'>
                    {router.isFallback ? (
                        <Skeleton />
                    ) : (
                        <>
                            <PostHeader post={post} />
                            <PostBody post={post} />
                        </>
                    )}
                </article>
            </div>
        </section>
    )
}
Post.layout = true;

export const getStaticProps = async ({ params, preview = false }) => {
    const cfClient = preview ? previewClient : client

    const { slug } = params
    const response = await cfClient.getEntries({
        content_type: 'post',
        'fields.slug': slug
    })

    if (!response?.items?.length) {
        return {
            redirect: {
                destination: '/posts',
                permanent: false
            }
        }
    }

    return {
        props: {
            post: response?.items?.[0],
            preview,
            revalidate: 60
        }
    }
}

export const getStaticPaths = async () => {
    const response = await client.getEntries({ content_type: 'post' })
    const paths = response.items.map(item => ({
        params: { slug: item.fields.slug }
    }))

    return {
        paths,
        fallback: true
    }
}

export default Post