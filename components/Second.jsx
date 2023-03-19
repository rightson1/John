import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useRef } from "react";
import { useRouter } from "next/router";

const Second = () => {
    const router = useRouter();
    const { colors, section, setSection } = useGlobalProvider();
    const scroll = useRef();
    useEffect(() => {
        if (section === "about") {
            scroll.current?.scrollIntoView({ behavior: "smooth" });
            setSection("");
        }
    });

    return <Grid container rowSpacing={5}
        className="p-[90px] md:pt-[200px] px-5 md:px-[140px] lg:px-[150px] llg:px-[200px] ">
        <Grid item xs={12} md={6} spacing={2} className="">
            <Typography className="font-semibold" color={colors.grey[100]} variant="h2" fontFamily="Hec" ref={scroll}>
                ABOUT US
            </Typography>
            <Box className="w-[70px] h-[5px]  my-3
        "  bgcolor={colors.yellow[500]}></Box>
            <div className="flex gap-3 flex-col"

            >
                <Typography color={colors.grey[100]} variant="h6" fontFamily="Lato" className="font-[600] text-[13px]">
                    John Lee Miller Limited is a fast growing Building and Construction company working towards being a world class contractor. Through commitment to improvements we are continuously seeking waste elimination, driving up quality of our services and maximizing value to for clients.

                </Typography>
                <Typography className="font-[600] text-[13px]" color={colors.grey[100]} variant="h6" fontFamily="Lato">

                    Our teams are colla
                    borative, cohesive and able to balance the social, environmental and economic challenges of the different stakeholders to create the right cost, quality and efficiency for our clients.
                </Typography>
            </div>
            <Button
                className="uppercase rounded-none py-3  w-[160px] text-black flex items-center "
                onClick={() => { router.push('/jml.pdf') }}
                sx={{
                    bgcolor: colors.yellow[500] + '!important',
                    color: colors.grey[100] + '!important',
                    mt: 4
                }}
            >
                <RemoveRedEyeOutlinedIcon className="mr-2" />
                <Typography fontFamily="Hec">
                    View Profile
                </Typography>
            </Button>
        </Grid>
        <Grid item xs={12} md={6} className="flex justify-center items-center">
            <img src="/building.png" alt="" className="h-[300px] md:h-[350px] w-[100%] md:w-3/4  " />
        </Grid>
    </Grid>
};

export default Second;
