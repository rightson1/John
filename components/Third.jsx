import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Third = () => {
    const { colors } = useGlobalProvider();
    return <Grid container gap={3}
        className="p-[90px] px-10 md:px-[140px] lg:px-[150px] llg:px-[200px] relative  -mt-[100px] ">
        <img src="/bg.png" alt="" className="absolute   md:w-screen h-[130vh] -top-[350px] left-0  z-[1]" />
        <Grid item xs={12} md={5.5} className="bg-primary   z-[4]  " spacing={4}>
            <Typography className="font-semibold my-4" textAlign="center" color={colors.grey[100]} variant="h4" fontFamily="Hec">
                OUR MISSION
            </Typography>

            <Box sx={{
                backgroundColor: colors.grey[800] + '!important',

            }}
                className="h-[60px] flex justify-center items-center my-3" textAlign="center" color={colors.grey[100]} variant="h4" fontFamily="Source Sans Pro">
                <img src="/svgs/mission.svg" alt="" className="w-[50px]" />
            </Box>
            <Typography textAlign="center" fontFamily="Lato" className="py-5 font-bold" >
                To deliver the highest standards in both workmanship, professionalism and value for
                money & to be the preferred contractor by clients in the building & Construction industry.
            </Typography>


        </Grid>
        <Grid item xs={12} md={5.5} className="bg-primary  z-[4]">
            <Typography className="font-semibold my-4" textAlign="center" color={colors.grey[100]} variant="h4" fontFamily="Hec">
                OUR VISION
            </Typography>

            <Box sx={{
                backgroundColor: colors.grey[800] + '!important',

            }}
                className="h-[60px] items-center flex justify-center  my-2" textAlign="center" color={colors.grey[100]} variant="h4" fontFamily="Lato">
                <img src="/svgs/vision.svg" alt="" className="w-[50px]" />
            </Box>
            <Typography textAlign="center" fontFamily="Source Sans Pro" className="py-5 font-bold" >
                To grow into a world class reliable building, construction and general supplies contractor.
            </Typography>


        </Grid>

    </Grid>
};

export default Third;
