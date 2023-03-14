import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
const Five = () => {
    const { colors } = useGlobalProvider();
    return <Grid container
        className="bg-primary">
        <Grid item xs={12} md={5} className="relative h-[450px] w-[100%] ">
            <img src="/ex.png" alt="" className="w-full h-full" />
            <Box className="absolute bottom-0    px-4 py-10 bg-[rgba(0,0,0,.8)] " >
                <Typography className="font-semibold text-white  md:pl-[60px]" color={colors.grey[100]} fontFamily="Lato">
                    The health and safety of our staff and property entrusted to us by our clients is of paramount importance to our organization as is looking after the environment in which we operate in to make it better for the communities that live there.
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={7} className="p-4 flex-col flex">
            <Typography className="font-semibold my-4" color={colors.grey[100]} variant="h4" fontFamily="Hec">
                OUR SERVICES
            </Typography>
            <Box className="w-[70px] h-[5px]  my-5
        "  bgcolor={colors.yellow[500]}></Box>
            <div className="flex">
                <Button
                    sx={{
                        display: {
                            xs: "none",
                            md: "block"
                        }

                    }}
                    className="h-[40px] self-center -translate-y-10">
                    <img src="/svgs/left.svg" alt="" className="w-[30px] h-[10px]" />
                </Button>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} className="flex  flex-col">
                        <div className="card flex flex-col  h-[350px] ">
                            <div className="w-full  overflow-hidden">
                                <img src="/ind.png" alt="" className=" w-full" />
                            </div>
                            <div className="bg-black h-1/4">
                                <Typography variant="h4" className="text-white text-center flex justify-center items-center p-4" fontFamily="Lato">
                                    Building & construction-
                                    nca registered
                                </Typography>
                            </div>
                        </div>
                        <Button className="w-[200px] self-center mt-2  items-center gap-1" sx={{
                            color: "black",
                            bgcolor: colors.yellow[500] + " !important",
                            display: {
                                xs: "flex ",
                                md: "none"
                            }

                        }
                        }
                        >

                            Next
                            <ArrowRightAltOutlinedIcon />
                        </Button>

                    </Grid>

                    <Grid item xs={12} md={6} sx={{
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    }} className="gap-4 ">
                        <div className="card flex flex-col  h-[350px] ">
                            <div className="w-full  overflow-hidden">
                                <img src="/ind2.png" alt="" className=" w-full" />
                            </div>
                            <div className="bg-black h-1/4">
                                <Typography variant="h4" className="text-white text-center flex justify-center items-center p-4" fontFamily="Lato">
                                    General Supplies
                                </Typography>
                            </div>
                        </div>

                    </Grid>


                </Grid>
                <Button className="h-[40px] self-center -translate-y-10"
                    sx={{
                        display: {
                            xs: "none",
                            md: "block"
                        }

                    }}
                >
                    <img src="/svgs/right.svg" alt="" className="w-[30px] h-[10px]" />
                </Button>
            </div>

        </Grid>


    </Grid>
};

export default Five;
