import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
const Five = () => {
    const { colors } = useGlobalProvider();
    return <Grid container gap={3}
        className="bg-primary">
        <Grid item xs={12} md={5.5} className="relative h-[400px] w-[100%] ">
            <img src="/ex.png" alt="" className="w-full h-full" />
            <Box className="absolute bottom-0    px-4 py-10 bg-[rgba(0,0,0,.8)] " >
                <Typography className="font-semibold text-white  md:pl-[60px]" color={colors.grey[100]} fontFamily="Source Sans Pro">
                    The health and safety of our staff and property entrusted to us by our clients is of paramount importance to our organization as is looking after the environment in which we operate in to make it better for the communities that live there.
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={5.5} className="p-4 flex-col gap-4 flex">
            <Typography className="font-semibold" color={colors.grey[100]} variant="h4" fontFamily="Source Sans Pro">
                OUR SERVICES
            </Typography>
            <Box className="w-[70px] h-[5px]  my-3
        "  bgcolor={colors.yellow[500]}></Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} className="flex gap-4 flex-col">
                    <Card  >
                        <CardMedia className="relative"
                            sx={{ height: 140 }}
                            image="/ind.png"
                            title="green iguana"
                        />
                        <CardContent className="bg-black">
                            <Typography variant="h6" className="text-white">
                                Building & construction-
                                nca registered
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={6} className="flex gap-4 flex-col">
                    <Card  >
                        <CardMedia className="relative"
                            sx={{ height: 140 }}
                            image="/ind2.png"
                            title="green iguana"
                        />
                        <CardContent className="bg-black">
                            <Typography variant="h6" className="text-white">
                                General Supplies
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>


            </Grid>
        </Grid>

    </Grid >
};

export default Five;
