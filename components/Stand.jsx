/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
import { BsPeople } from "react-icons/bs";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { FaRibbon } from "react-icons/fa";

const Stand = () => {
    const { colors } = useGlobalProvider();
    const Item = ({ icon, name, pr }) => (
        <Grid container gap={2} minWidth="200px">
            <Grid item xs={12} className="flex flex-col justify-center items-center  h-[200px]" sx={{
                bgcolor: colors.yellow[500] + " !important",
            }}>
                <div>  {icon}</div>
                <Typography variant="h4" textAlign="center" fontFamily="Lato" className="font-bold ">
                    {name}
                </Typography>

            </Grid>
            <Grid item xs={12} className="flex flex-col justify-center items-center  h-[200px]" sx={{
                bgcolor: colors.yellow[500] + " !important",
            }}>
                <Typography variant="body1" textAlign="center" fontFamily="Lato" className="">
                    {pr}
                </Typography>
            </Grid>
        </Grid>
    )
    return <Grid container className="relative min-h-screen flex justify-center items-center py-10 pb-[120px]">
        <Typography variant="h1" fontSize={{
            xs: 30,
            md: 50
        }} fontFamily="Lato" className="font-bold text-black  my-5" >
            WHAT WE STAND BY
        </Typography>
        <Grid spacing={3} container className="z-[5]" sx={{
            width: {
                xs: "100%",
                md: "80%"
            }
        }}>
            <Grid item xs={12} md={4} >
                <Item icon={<BsPeople className="text-[40px] text-black" />} name="Social Corporate
Responsibility" pr="The company team up with
other organizations to help
the needy in society" />



            </Grid>

            <Grid item xs={12} md={4} >
                <Item icon={<GiPlantsAndAnimals className="text-[40px] text-black" />} name="Environmental
Policy" pr="The company strives in her
operations to reduce
pollution and encourage
green economy being guided
nationally and internationally
by environmental laws to
operate sustainably" />
            </Grid>

            <Grid item xs={12} md={3} >
                <Item icon={<FaRibbon className="text-[40px] text-black" />} name="Health
Awareness" pr="We promote health and
safety awareness campaign
programmes to both our
staff, local labour workforce
we hire and the local
community in the areas we
carry out our projects." />
            </Grid>

        </Grid>
        <div className="absolute bg-black h-1/2  w-screen bottom-0 z-[1]">

        </div>

        {/* <Box sx={{
            display: {
                xs: "block",
                md: "none"
            }
        }} className="bottom-5 left-5 z-[6] absolute  flex flex-col -gap-[5px]">
            <Typography variant="body1" fontFamily="Lato" className=" text-white" >
                4.
            </Typography>

            <Box className="w-[50px] h-[3px]  my-3
        "  bgcolor='white'></Box>
            <Typography variant="body2" fontFamily="Lato" className="text-white text-[12px]" >
                Q UA L I T Y P R O F E S S I O N A L S E RV I C E S D E L I V E R E D A S A STA N DA R D . . .
            </Typography>
        </Box> */}
    </Grid>;
};


export default Stand;
