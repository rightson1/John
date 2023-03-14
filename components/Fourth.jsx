import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Fourth = () => {
    const { colors } = useGlobalProvider();
    return <Grid container gap={3}
        className="px-1 md:px-[80px] py-10">
        <Grid item xs={12} md={5.5} className=" p-4" sx={{

        }}>
            <img src="/machine.png" alt="" className="h-[400px] md:h-full w-[100%] " />
        </Grid>
        <Grid item xs={12} md={5.5} className="p-4 flex-col gap-4 flex">
            <Typography className="font-semibold" color={colors.grey[100]} variant="h4" fontFamily="Hec">
                WHAT WE STAND BY
            </Typography>
            <Box className="w-[70px] h-[5px]  my-3
        "  bgcolor={colors.yellow[500]}></Box>
            <div className="flex flex-col">

                <div className="flex items-center gap-2">
                    <Typography className="font-semibold" color={colors.grey[100]} variant="h4" fontFamily="Lato">
                        01.
                    </Typography>
                    <Box className="flex-1 h-[20px]  my-3
        "  bgcolor={colors.grey[900]}></Box>
                </div>
                <Typography className="font-semibold " color={colors.grey[100]} variant="h5" fontFamily="Lato">
                    Social Corporate Responsibility
                </Typography>
                <Typography className="py-2" color={colors.grey[100]} variant="body1" fontFamily="Lato">
                    The company team up with other organizations to help the needy in society
                </Typography>
            </div>
            <div className="flex flex-col">

                <div className="flex items-center gap-2">
                    <Typography className="font-semibold" color={colors.grey[100]} variant="h4" fontFamily="Lato">
                        02.
                    </Typography>
                    <Box className="flex-1 h-[20px]  my-3
        "  bgcolor={colors.grey[900]}></Box>
                </div>
                <Typography className="font-semibold " color={colors.grey[100]} variant="h5" fontFamily="Lato">
                    Environmental Policy
                </Typography>
                <Typography className="py-2" color={colors.grey[100]} variant="body1" fontFamily="Lato">
                    The company strives in her operations  to reduce pollution and encourage green economy being
                    guided nationally and internationally by environmental laws to operate sustainably
                </Typography>
            </div>
            <div className="flex flex-col">

                <div className="flex items-center gap-2">
                    <Typography className="font-semibold" color={colors.grey[100]} variant="h4" fontFamily="Lato">
                        03.
                    </Typography>
                    <Box className="flex-1 h-[20px]  my-3
        "  bgcolor={colors.grey[900]}></Box>
                </div>
                <Typography className="font-semibold " color={colors.grey[100]} variant="h5" fontFamily="Lato">
                    Health Awareness
                </Typography>
                <Typography className="py-2" color={colors.grey[100]} variant="body1" fontFamily="Lato">
                    We promote health and safety awareness campaign programmes to both our staff, local labour workforce we
                    hire and the local community in the areas we carry out our projects.
                </Typography>
            </div>
        </Grid>

    </Grid>
};

export default Fourth;
