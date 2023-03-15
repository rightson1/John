/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import { useGlobalProvider } from "../../../utils/themeContext";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Divider from '@mui/material/Divider';
import { client } from "../../../lib/client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import { useRouter } from "next/router";
const Projects = ({ posts }) => {
    const { colors, isMobile, isMedium } = useGlobalProvider()
    const [page, setPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(10);
    const totalBlogs = posts?.length;
    const router = useRouter();
    const { project } = router.query
    useEffect(() => {
        setPage(1);
    }, [posts]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const displayedPosts = posts?.slice(startIndex, endIndex);
    return <div className="w-full min-h-screen">
        <div className="flex h-[40vh] hero justify-center align-center items-center flex-col">

            <Typography variant="h1" fontFamily="Hec" className=" text-white font-[900] uppercase " fontSize={{
                xs: 30,
                md: 35,
                lg: 65
            }}>
                {project}
            </Typography>

            <Box className="w-[100px] h-[7px]  my-3 flex justify-center items-start
        "  bgcolor={colors.yellow[500]}></Box>
        </div>
        <div className="flex w-full p-10 ">
            <Divider flexItem width="100%" sx={{ borderBottomWidth: 5 }} />
        </div>

        <div className="flex items-center justify-center p-5 md:p-10">
            <Grid container spacing={2}>
                {displayedPosts.filter((item) => item.fields.projectType.fields.projectName === project).map((item) => {
                    const { name, image, slug, excerpt, date, coverImage } = item.fields
                    return <Grid item xs={12} md={6} key={item}>
                        <div className="flex flex-col items-center justify-center p-5">
                            <div className="flex flex-col items-center justify-center p-5">
                                <img src={coverImage.fields.file.url} alt="" className="w-full min-h-[300px] max-h-[350px] object-cover " />
                                <div className="flex flex-col items-center justify-center py-5">
                                    <Typography variant="h3" textAlign="left" fontFamily="Hec" className=" text-black font-[900]  self-start" >
                                        {name}
                                    </Typography>
                                    <div className="flex w-full py-5">
                                        <Divider flexItem width="100%" sx={{ borderBottomWidth: 2 }} />
                                    </div>

                                    <Typography variant="body1" fontFamily="Nunito" className=" text-black  " >
                                        {excerpt}
                                    </Typography>
                                    <Link href={`/project/${slug}`}>
                                        <a className="flex items-center justify-center self-start">
                                            <Typography variant="h1" fontFamily="Hec" className=" text-black font-[900] text-xl" >
                                                Read More
                                            </Typography>
                                            <ArrowRightAltIcon className="text-black text-3xl" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Grid>


                })}
            </Grid>


        </div>
        <div className="flex w-full p-5 justify-center">
            <Pagination
                count={Math.ceil(totalBlogs / blogsPerPage)}
                page={page}
                onChange={handlePageChange}
            />
        </div>
    </div>;
};

Projects.layout = true;

export const getStaticProps = async () => {
    const response = await client.getEntries({ content_type: 'projects' })
    if (!response?.items?.length) {
        return {
            redirect: {
                destination: '/projects',
                permanent: false
            }
        }
    } else if (response?.items?.length) {
        return {
            props: {
                posts: response.items
            },
            revalidate: 1
        }
    }


}
export const getStaticPaths = async () => {
    const response = await client.getEntries({ content_type: 'projectType' });
    const paths = response.items.map(item => ({
        params: { project: item.fields.slug }
    }))

    return {
        paths,
        fallback: true
    }
}
export default Projects;