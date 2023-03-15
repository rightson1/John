import ProjectBody from '../../components/projects/ProjectBody'
import PreviewAlert from '../../components/ui/PreviewAlert'
import Skeleton from '../../components/ui/Skeleton'
import { client, previewClient } from '../../lib/client'
import { useRouter } from 'next/router'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useGlobalProvider } from '../../utils/themeContext';
const Project = ({ project, preview }) => {
    const router = useRouter();
    const { colors } = useGlobalProvider();


    return (
        <section className='py-10'>
            <Box className="flex h-[60vh]  justify-center align-center items-center flex-col"
                sx={{
                    //linear gradient to make the text more readable
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${project?.fields?.coverImage?.fields?.file?.url})`,
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                }}
            >

                <Typography variant="h1" fontFamily="Hec" className=" text-white font-[900] " fontSize={{
                    xs: 30,
                    md: 35,
                    lg: 65
                }}>
                    {project?.fields?.name}
                </Typography>

                <Box className="w-[100px] h-[7px]  my-3 flex justify-center items-start
        "  bgcolor={colors.yellow[500]}></Box>
            </Box>
            {preview && <PreviewAlert />}
            <div className='w-full flex justify-center  '>
                <article className='max-w-[900px]'>
                    {router.isFallback ? (
                        <Skeleton />
                    ) : (
                        <>
                            <ProjectBody project={project} />
                        </>
                    )}
                </article>
            </div>
        </section>
    )
}
Project.layout = true;

export const getStaticProps = async ({ params, preview = false }) => {
    const cfClient = preview ? previewClient : client

    const { slug } = params
    const response = await cfClient.getEntries({
        content_type: 'projects',
        'fields.slug': slug
    })

    if (!response?.items?.length) {
        return {
            redirect: {
                destination: '/projects',
                permanent: false
            }
        }
    }

    return {
        props: {
            project: response?.items?.[0],
            preview,
            revalidate: 60
        }
    }
}

export const getStaticPaths = async () => {
    const response = await client.getEntries({ content_type: 'projects' })
    const paths = response.items.map(item => ({
        params: { slug: item.fields.slug }
    }))

    return {
        paths,
        fallback: true
    }
}

export default Project