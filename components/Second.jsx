import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const Second = () => {
    const { colors } = useGlobalProvider();
    return <Grid container
        className="p-[90px] px-10 md:px-[80px]">
        <Grid item xs={12} md={6} spacing={2}>
            <Typography className="font-semibold" color={colors.grey[100]} variant="h4" fontFamily="Source Sans Pro">
                ABOUT US
            </Typography>
            <Box className="w-[70px] h-[5px]  my-3
        "  bgcolor={colors.yellow[500]}></Box>
            <div className="flex gap-3 flex-col">
                <Typography color={colors.grey[100]} variant="h6" fontFamily="Source Sans Pro" className="font-[600]">
                    John Lee Miller Limited is a fast growing Building and Construction company working towards being a world class contractor. Through commitment to improvements we are continuously seeking waste elimination, driving up quality of our services and maximizing value to for clients.

                </Typography>
                <Typography className="font-[600]" color={colors.grey[100]} variant="h6" fontFamily="Source Sans Pro">

                    Our teams are colla
                    borative, cohesive and able to balance the social, environmental and economic challenges of the different stakeholders to create the right cost, quality and efficiency for our clients.
                </Typography>
            </div>
            <Button
                className="uppercase rounded-none py-3  w-[130px] text-black flex items-center"
                sx={{
                    bgcolor: colors.yellow[500] + '!important',
                    color: colors.grey[100] + '!important',
                    mt: 4
                }}
            >
                <RemoveRedEyeOutlinedIcon className="mr-2" />
                View Profile
            </Button>
        </Grid>
        <Grid item xs={12} md={6} className="flex justify-center items-center">
            <img src="/building.png" alt="" className="h-[300px] w-[100%] md:w-3/4  " />
        </Grid>
    </Grid>
};

export default Second;
