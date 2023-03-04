import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Six = () => {
    const { colors } = useGlobalProvider();
    return <Grid
        className="px-1 md:px-[80px] py-10 flex justify-center flex-col items-center">

        <Typography className="font-semibold" textAlign="center" color={colors.grey[100]} variant="h4" fontFamily="Source Sans Pro">
            OUR PATNERS AND CLIENTS
        </Typography>
        <Box className="w-[70px] h-[5px]  my-3
        "  bgcolor={colors.yellow[500]}></Box>

        <Grid container className="flex justify-center">
            <Grid xs={6} md={2} item>

                <img src="/PNG/1.png" alt="" className="w-full h-[150px] max-w-[250px]" />
                <Typography className="font-semibold" color={colors.grey[100]} fontFamily="Source Sans Pro">
                    Other contractors in
                    the building & construction
                    industry
                </Typography>

            </Grid>
            <Grid xs={6} md={2} item>

                <img src="/PNG/2.png" alt="" className="w-full h-[150px] max-w-[250px]" />
                <Typography className="font-semibold pr-5" textAlign="center" color={colors.grey[100]} fontFamily="Source Sans Pro">
                    General Suppliers
                </Typography>

            </Grid>
            <Grid xs={6} md={2} item>

                <img src="/PNG/3.png" alt="" className="w-full h-[150px] max-w-[250px]" />
                <Typography className="font-semibold pr-5 " textAlign="center" color={colors.grey[100]} fontFamily="Source Sans Pro">
                    Private Sector
                </Typography>

            </Grid>
            <Grid xs={6} md={2} item>

                <img src="/PNG/4.png" alt="" className="w-full h-[150px] max-w-[250px]" />
                <Typography className="font-semibold pr-5" textAlign="center" color={colors.grey[100]} fontFamily="Source Sans Pro">
                    County Government
                </Typography>

            </Grid>
            <Grid xs={6} md={2} item>

                <img src="/PNG/5.png" alt="" className="w-full h-[150px] max-w-[250px]" />
                <Typography className="font-semibold pr-5" textAlign="center" color={colors.grey[100]} fontFamily="Source Sans Pro">
                    National Government
                </Typography>

            </Grid>
        </Grid>
    </Grid>
};

export default Six;
