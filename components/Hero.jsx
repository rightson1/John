import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Hero = () => {
    const { colors } = useGlobalProvider();
    return <Box
        className="relative h-[80vh] md:max-h-[85vh]  ">
        <img src="/hero-1.png" alt="" className="h-full w-screen object-cover" />

        <img src="/asset.png" alt="" className="w-[200px]  h-[200px] md:w-[200px] md:h-[200px] llg:h-[300px]  llg:w-[250px]  object-cover top-[50px] md:top-[100px]  absolute left-[90px] md:left-[130px] lg:left-[140px] llg:left-[200px] " />
        <div className="absolute w-3/4 bg-black flex justify-center flex-col  p-4 md:px-8 md:py-6 gap-2 -bottom-10 md:-bottom-[110px] md:max-w-[450px] llg:max-w-[430px]  left-[90px] md:left-[130px] lg:left-[140px] llg:left-[200px] ">
            <Typography color={colors.grey[900]} variant="h2" fontFamily="Hec" fontSize={{
                xs: "1.5rem",
                md: "2rem",
            }}>
                DELIVERING THE HIGHEST
                STANDARDS
            </Typography>
            <Typography color={colors.yellow[500]} variant="h4" fontFamily="Lato">
                In both workmanship, professionalism
                and value for money
            </Typography>
            <Button
                className="uppercase rounded-none py-3 px-0   text-white flex justify-start"
            >
                Learn More
                <ArrowRightAltIcon className="ml-2" />
            </Button>
        </div>

    </Box>
};

export default Hero;
