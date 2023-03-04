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
        className="px-1 md:px-[80px]">
        <Grid item xs={12} md={5.5} className="bg-primary p-4">
            <Typography className="font-semibold" textAlign="center" color={colors.grey[100]} variant="h4" fontFamily="Source Sans Pro">
                OUR MISSION
            </Typography>

            <Typography sx={{
                backgroundColor: colors.grey[700] + '!important',
            }}
                className="font-semibold p-2" textAlign="center" color={colors.grey[100]} variant="h4" fontFamily="Source Sans Pro">
                <TrackChangesIcon className="mr-2 text-[30px]" />
            </Typography>
            <Typography textAlign="center" fontFamily="Source Sans Pro" className="py-5 font-bold" >
                To deliver the highest standards in both workmanship, professionalism and value for
                money & to be the preferred contractor by clients in the building & Construction industry.
            </Typography>


        </Grid>
        <Grid item xs={12} md={5.5} className="bg-primary p-4">
            <Typography className="font-semibold" textAlign="center" color={colors.grey[100]} variant="h4" fontFamily="Source Sans Pro">
                OUR VISION
            </Typography>

            <Typography sx={{
                backgroundColor: colors.grey[700] + '!important',
            }}
                className="font-semibold p-2" textAlign="center" color={colors.grey[100]} variant="h4" fontFamily="Source Sans Pro">
                <VisibilityOutlinedIcon className="mr-2 text-[30px]" />
            </Typography>
            <Typography textAlign="center" fontFamily="Source Sans Pro" className="py-5 font-bold" >
                To grow into a world class reliable building, construction and general supplies contractor.
            </Typography>


        </Grid>

    </Grid>
};

export default Third;
