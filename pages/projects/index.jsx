import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useGlobalProvider } from "../../utils/themeContext";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Divider from '@mui/material/Divider';
import { client } from "../../lib/client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import Title from "../../components/Title";
const Projects = ({ posts }) => {
    const { colors, isMobile, } = useGlobalProvider()
    const [page, setPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(isMobile ? 2 : 4);
    const totalBlogs = posts.length;

    useEffect(() => {
        setPage(1);
    }, [posts]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const displayedPosts = posts.slice(startIndex, endIndex);
    return <div className="w-full h-full">
        <Title title="John Lee Miller |Our Projects in Landscaping, Interior Design, Architecture, Consultancy, and Construction Supplies" description="JLM has successfully completed various projects in Landscaping, Interior Design, Architecture, Consultancy, and Construction Supplies. Browse our portfolio to see our excellent work and how we can help you achieve your vision" />
        <div className="flex h-[40vh] hero justify-center align-center items-center flex-col">

            <Typography variant="h1" fontFamily="Hec" className=" text-white font-[900] " fontSize={{
                xs: 30,
                md: 35,
                lg: 65
            }}>
                PROJECTS
            </Typography>

            <Box className="w-[100px] h-[7px]  my-3 flex justify-center items-start
        "  bgcolor={colors.yellow[500]}></Box>
        </div>
        <div className="flex w-full p-5 mt-5 md:p-10 ">
            <Divider flexItem width="100%" sx={{ borderBottomWidth: 2 }} />
        </div>

        <div className="flex items-center justify-center p-5 md:p-10 flex-col pb-10 ">
            <Grid container spacing={2}>
                {displayedPosts.map((item, index) => {
                    const { name, image, slug, excerpt, date, coverImage } = item.fields
                    return <Grid item xs={12} md={6} key={index}>
                        <div className="flex flex-col items-center justify-center md:p-5">
                            <div className="flex flex-col items-center justify-center md:p-5">
                                <img src={coverImage.fields.file.url} alt="" className="w-full min-h-[300px] max-h-[350px] object-cover " />
                                <div className="flex flex-col items-center justify-center py-5">
                                    <Typography variant="h3" textAlign="left" fontFamily="Lato" className=" text-black font-[900]  self-start" >
                                        {name}
                                    </Typography>
                                    <div className="flex w-full py-5">
                                        <Divider flexItem width="100%" sx={{ borderBottomWidth: 2 }} />
                                    </div>

                                    <Typography variant="body1" fontFamily="Lato" className=" text-black  " >
                                        {excerpt}
                                    </Typography>
                                    <Link href={`/projects/${slug}`}>
                                        <a className="flex items-center justify-center self-start  gap-2">
                                            <Typography variant="h4" fontFamily="Lato" className=" text-black font-[700] text-xl" >
                                                Learn  More
                                            </Typography>
                                            <ArrowRightAltIcon className=" text-4xl pt-1" sx={{
                                                color: colors.yellow[500] + " !important"
                                            }} />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Grid>


                })}
            </Grid>
            <div className="flex w-full p-5 justify-center">
                <Pagination
                    count={Math.ceil(totalBlogs / blogsPerPage)}
                    page={page}
                    onChange={handlePageChange}
                />
            </div>

        </div>

    </div>;
};


export const getStaticProps = async () => {
    const response = await client.getEntries({ content_type: 'projects' })

    return {
        props: {
            posts: response.items,
            revalidate: 60
        }
    }
}

export default Projects;