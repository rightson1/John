/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Partners = () => {
    const { colors } = useGlobalProvider();
    return <Grid container className="md:min-h-screen">

        <Grid item xs={12} md={4} className="flex flex-col justify-center items-center gap-5 p-10 relative pb-20 md:pb-[200px]" sx={{
            bgcolor: colors.yellow[500],
        }}>
            <Typography variant="h1" fontFamily="Lato" className="font-bold text-[50px]">
                OUR
                PARTNERS
            </Typography>
            <div className="flex flex-col items-start gap-4 ">
                <div className="flex gap-3 items-center justify-center">
                    <ArrowRightIcon className="text-3xl" />
                    <Typography>
                        Other contractors in the building
                        and construction industry
                    </Typography>
                </div>
                <div className="flex gap-3 items-center justify-center">
                    <ArrowRightIcon className="text-3xl" />
                    <Typography>
                        General suppliers
                    </Typography>
                </div>
                <div className="flex gap-3 items-center justify-center">
                    <ArrowRightIcon className="text-3xl" />
                    <Typography>
                        Our clients; Private Sector, County
                        Government and National
                        Government
                    </Typography>
                </div>
                <Box className="flex-col  items-start hidden md:flex my-10 absolute left-10 bottom-1 ">
                    <Typography variant="h6" fontFamily="Lato" className=" text-black" >
                        5.
                    </Typography>

                    <Box className="w-[50px] h-[3px]  my-3
        "  bgcolor='black'></Box>
                    <Typography variant="body1" fontFamily="Lato" className="text-black text-[12px]" >
                        Q UA L I T Y P R O F E S S I O N A L S E RV I C E S D E L I V E R E D A S A STA N DA R D . .
                    </Typography>
                </Box>
            </div>

        </Grid>
        <Grid item xs={12} md={8} className="agree relative" sx={{
            display: {
                xs: "none",
                md: "block"
            }
        }}>
            <img src="/logo.svg" alt="" className="w-[150px] absolute bottom-10 right-10" />
        </Grid>
    </Grid>;
};

export default Partners;
