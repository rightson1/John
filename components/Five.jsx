import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState, useCallback } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { motion } from "framer-motion";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

const Five = () => {
    const { colors, section, setSection, isLarge } = useGlobalProvider();
    const scroll = useRef();
    const sliderRef = useRef(null);

    useEffect(() => {
        if (section === "services") {
            scroll.current?.scrollIntoView({ behavior: "smooth" });
            setSection("");
        }
    });

    const Item = ({ image, text }) => {
        return (
            <Box className="card flex flex-col  h-[350px] w-full    cursor-pointer" id="services"
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
                <Box className="bg-black h-1/4 relative hov transition ease-in-out duration-500  ">
                    <Link href="/contact">
                        <motion.div className="h-[50px] absolute -top-[50px] w-full bg-[#fff200] z-[5] cursor-pointer flex justify-center items-center opacity-0 hov">

                            <Typography fontFamily="Lato">   Contact Us


                            </Typography>

                            <ArrowRightAltIcon className="ml-2" />

                        </motion.div>
                    </Link>
                    <Typography variant="h4" className="text-white text-center flex justify-center items-center p-4" fontFamily="Lato">
                        {text}
                    </Typography>
                </Box>
            </Box>
        )
    }
    return <Grid container
        className="">
        <Grid item xs={12} md={5} className="relative h-[400px] md:h-full w-[100%] ">
            <img src="/ex.png" alt="" className="w-full h-full" ref={scroll} />
            <Box className="absolute bottom-0    px-4 py-10 bg-[rgba(0,0,0,.8)] " >
                <Typography className="font-semibold text-white  md:pl-[60px]" color={colors.grey[100]} fontFamily="Lato">
                    The health and safety of our staff and property entrusted to us by our clients is of paramount importance to our organization as is looking after the environment in which we operate in to make it better for the communities that live there.
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={7} className="p-4 flex-col flex">
            <div className="flex flex-col  my-7">
                <Typography className="font-semibold my-4" color={colors.grey[100]} variant="h2" fontFamily="Hec">
                    OUR SERVICES
                </Typography>
                <Box className="w-[70px] h-[5px]  mb-3
        "  bgcolor={colors.yellow[500]}></Box>
            </div>


            <div className="w-full h-full">
                <Swiper


                    spaceBetween={50}
                    slidesPerView={
                        isLarge ? 2 : 1
                    }
                >
                    {
                        items.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Item image={item.image} text={item.name} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>



        </Grid>


    </Grid>
};
const items = [
    {
        image: "/ind.png",
        name: "Building & construction- nca registered"

    },
    {
        image: "/ind2.png",
        name: "General Supplies"

    },
    {
        image: "/1.jpg",
        name: "Architectural and Survey Consultancy",
    },
    {
        image: "/2.jpg",
        name: "Land Scaping",
    },
    {
        image: "/3.jpg",
        name: "Interior Design and Painting",


    }, {
        image: "/5.jpg",
        name: "Supply of Clean Water",
    },

    {
        image: "/6.jpg",
        name: "Supply and Design of Water Facilities",


    }, {
        image: "/7.jpg",
        name: "Suuply of all types of Building and Construction Materials",

    }

]

export default Five;
