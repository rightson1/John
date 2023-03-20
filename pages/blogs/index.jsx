/* eslint-disable @next/next/no-img-element */
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
import { Grid } from "@mui/material";
const Blogs = ({ posts }) => {
    const { colors, isMobile, isMedium } = useGlobalProvider()
    const [page, setPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(3);
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
        <div className="flex h-[40vh] hero justify-center align-center items-center flex-col">

            <Typography variant="h1" fontFamily="Hec" className=" text-white font-[900] " fontSize={{
                xs: 30,
                md: 35,
                lg: 65
            }}>
                BLOGS
            </Typography>

            <Box className="w-[100px] h-[7px]  my-3 flex justify-center items-start
        "  bgcolor={colors.yellow[500]}></Box>
        </div>
        <div className="flex w-full p-10 mt-10">
            <Divider flexItem width="100%" sx={{ borderBottomWidth: 1, }} />
        </div>

        <div className="flex items-center justify-center p-5 md:p-10 flex-col mb-10">
            <Grid container sx={{ width: '100%' }} spacing={2}>
                {displayedPosts.map((item, index) => {
                    const { title, slug, coverImage } = item.fields

                    return (
                        <Grid item xs={12} md={6} lg={4} key={index} className="">
                            <Link href={`/blogs/${slug}`}>
                                <Box className="relative">
                                    <img
                                        src={`${coverImage.fields.file.url}`}
                                        srcSet={`${coverImage.fields.file.url}`}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-[350px] object-cover "

                                    />
                                    <div className="absolute p-4  bottom-0 bg-[rgba(0,0,0,.5)] w-full flex flex-col gap-2 cursor-pointer">
                                        <Typography variant="h3" fontFamily="Lato" className=" text-white  text-[900] ">
                                            {title}
                                        </Typography>
                                        <div className="flex w-full ">
                                            <Divider flexItem width="100%" sx={{ borderBottomWidth: 1, backgroundColor: 'white' }} />
                                        </div>
                                        {/* Learn more trnsparent button with arrow */}
                                        <div className="flex  items-center gap-3">
                                            <Typography variant="h5" fontFamily="Lato" className=" text-white ">
                                                Learn More
                                            </Typography>
                                            <ArrowRightAltIcon className="text-yellow-500 text-[30px]" />
                                        </div>



                                    </div>
                                </Box>
                            </Link>



                        </Grid>
                    )
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
    const response = await client.getEntries({ content_type: 'post' })

    return {
        props: {
            posts: response.items,
            revalidate: 60
        }
    }
}

export default Blogs;
