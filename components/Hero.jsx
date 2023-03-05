import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";

const Hero = () => {
    const { colors } = useGlobalProvider();
    return <Box
        className="relative h-[80vh] md:max-h-[85vh]  ">
        <img src="/hero.png" alt="" className="h-full w-screen object-cover" />

        <img src="/asset.png" alt="" className="max-w-[150px] max-h-[200px] object-cover top-[120px] md:top-[180px] absolute left-10" />
        <div className="absolute w-3/4 bg-black flex justify-center flex-col left-10  p-4 gap-2 -bottom-10 md:-bottom-14 max-w-[380px]">
            <Typography color={colors.grey[900]} variant="h4">
                DELIVERING THE HIGHEST
                STANDARDS
            </Typography>
            <Typography color={colors.yellow[500]} variant="h4">
                In both workmanship, professionalism
                and value for money
            </Typography>
            <Button
                className="uppercase rounded-none py-3  w-[130px] bg-primary text-black"
            >
                Learn More
            </Button>
        </div>

    </Box>
};

export default Hero;
