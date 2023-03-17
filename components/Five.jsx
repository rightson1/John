import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { motion } from "framer-motion";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Five = () => {
    const { colors } = useGlobalProvider();
    const item = (image, text) => {
        console.log(text)

        return (
            <Box className="card flex flex-col  h-[350px]  transition transition-all duration-500 ease-in-out  cursor-pointer"
                sx={{
                    "&:hover": {
                        "& .hov": {
                            opacity: 1
                        }
                    }
                }}

            >
                <div className="w-full  overflow-hidden">
                    <img src={image} alt="" className=" w-full" />
                </div>
                <Box className="bg-black h-1/4 relative hov transition ease-in-out duration-500 ">
                    <motion.div className="h-[50px] absolute -top-[50px] w-full bg-[#fff200] z-[5] cursor-pointer flex justify-center items-center opacity-0 hov">
                        <Typography fontFamily="Lato">    Learn More</Typography>
                        <ArrowRightAltIcon className="ml-2" />

                    </motion.div>
                    <Typography variant="h4" className="text-white text-center flex justify-center items-center p-4" fontFamily="Lato">
                        {text}
                    </Typography>
                </Box>
            </Box>
        )
    }
    return <Grid container
        className="bg-primary">
        <Grid item xs={12} md={5} className="relative h-[450px] w-[100%] ">
            <img src="/ex.png" alt="" className="w-full h-full" />
            <Box className="absolute bottom-0    px-4 py-10 bg-[rgba(0,0,0,.8)] " >
                <Typography className="font-semibold text-white  md:pl-[60px]" color={colors.grey[100]} fontFamily="Lato">
                    The health and safety of our staff and property entrusted to us by our clients is of paramount importance to our organization as is looking after the environment in which we operate in to make it better for the communities that live there.
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={7} className="p-4 flex-col flex">
            <div className="flex flex-col pl-[60px] my-7">
                <Typography className="font-semibold my-4" color={colors.grey[100]} variant="h2" fontFamily="Hec">
                    OUR SERVICES
                </Typography>
                <Box className="w-[70px] h-[5px]  mb-3
        "  bgcolor={colors.yellow[500]}></Box>
            </div>
            <div className="flex">
                <Button
                    sx={{
                        display: {
                            xs: "none",
                            md: "block"
                        }

                    }}
                    className="h-[40px] self-center -translate-y-10">
                    <img src="/svgs/left.svg" alt="" className="w-[30px] h-[10px]" />
                </Button>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} className="flex  flex-col">
                        {/* <div className="card flex flex-col  h-[350px] ">
                            <div className="w-full  overflow-hidden">
                                <img src="/ind.png" alt="" className=" w-full" />
                            </div>
                            <div className="bg-black h-1/4 ">
                                <Typography variant="h4" className="text-white text-center flex justify-center items-center p-4" fontFamily="Lato">
                                    Building & construction-
                                    nca registered
                                </Typography>
                            </div>
                        </div> */}
                        {item("/ind.png", "Building & construction- nca registered")}
                        <Button className="w-[200px] self-center mt-2  items-center gap-1" sx={{
                            color: "black",
                            bgcolor: colors.yellow[500] + " !important",
                            display: {
                                xs: "flex ",
                                md: "none"
                            }

                        }
                        }
                        >

                            Next
                            <ArrowRightAltOutlinedIcon />
                        </Button>

                    </Grid>

                    <Grid item xs={12} md={6} sx={{
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    }} className="gap-4 ">
                        {item("/ind2.png", "General Supplies")}

                    </Grid>


                </Grid>
                <Button className="h-[40px] self-center -translate-y-10"
                    sx={{
                        display: {
                            xs: "none",
                            md: "block"
                        }

                    }}
                >
                    <img src="/svgs/right.svg" alt="" className="w-[30px] h-[10px]" />
                </Button>
            </div>

        </Grid>


    </Grid>
};

export default Five;
