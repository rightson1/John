import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Hero = () => {
    const { colors } = useGlobalProvider();
    return <Box
        className="relative h-[80vh] md:max-h-[85vh]  ">
        <img src="/land.png" alt="" className="h-full w-screen object-cover" />

        <img src="/asset.png" alt="" className="max-w-[150px] llg:max-w-[200px] max-h-[200px] llg:h-[300px] llg:w-[200px]  object-cover top-[100px] md:top-[120px]  absolute left-10 " />
        <div className="absolute w-3/4 bg-black flex justify-center flex-col left-10  p-4 md:px-8 md:py-6 gap-2 -bottom-10 md:-bottom-20 md:max-w-[450px] llg:max-w-[430px] ">
            <Typography color={colors.grey[900]} variant="h2" fontFamily="Hec">
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
