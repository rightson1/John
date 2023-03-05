/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
import { GrUserWorker } from "react-icons/gr";
import { AiOutlineBuild } from "react-icons/ai";
import { FcReuse } from "react-icons/fc";
import { SiAltiumdesigner } from "react-icons/si";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosConstruct } from "react-icons/io";
import { BsDroplet } from "react-icons/bs";
import { GiGardeningShears } from "react-icons/gi";
import { RiSurveyLine } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
const Market = () => {
    const { colors } = useGlobalProvider();
    const Item = ({ icon, name }) => (

        <Box className="flex flex-col justify-center items-center   min-w-[200px]">
            {icon}
            <Typography variant="h6" textAlign="center" fontFamily="Lato" className=" text-white opacity-80">
                {name}
            </Typography>

        </Box>

    )
    return <Grid container className="md:min-h-screen relative">

        <Grid item xs={12} md={4} className="flex flex-col justify-center  p-10 relative pb-20 md:pb-[200px] gap-7" >
            <img src="/PNG/yel.png" alt="" className="self-start w-[100px]" />
            <Typography variant="h1" fontFamily="Lato" className=" text-black font-[800]" fontSize={{
                xs: 30,
                md: 50
            }} letterSpacing={{
                xs: 10,
                md: 20
            }} >
                MARKET
                FOCUS
            </Typography>
            {/* semi heading */}
            <div className="flex flex-col gap-5">
                <Typography variant="h6" fontFamily="Lato" className=" text-black font-[800]" letterSpacing={10}>
                    Working Philosophy
                </Typography>
                <Typography variant="body1" fontFamily="Lato" className="text-black text-[15px] mt-5" >
                    John Lee Miller Limited is an equal opportunity
                    employer that values and recognizes what the
                    richness in diversity can bring to the organization.
                </Typography>
                <Typography variant="body1" fontFamily="Lato" className="text-black text-[15px] mt-5" >
                    The health and safety of our staff and property
                    entrusted to us by our clients is of paramount
                    importance to our organization as is looking after
                    the environment in which we operate in to make it
                    better for the communities that live there.
                </Typography>

            </div>
        </Grid>
        <Grid item xs={12} md={8} className="bg-black flex flex-col  p-5 justify-center items-start gap-8" >
            <Typography variant="h4" fontFamily="Lato" className=" " sx={{
                color: colors.yellow[500]
            }}
            >
                Main Business Sector
            </Typography>
            <Grid container spacing={5} >
                <Grid item xs={12} md={4} className="flex flex-col gap-3 px-5">
                    <Item icon={<AiOutlineBuild className="text-[70px] text-white" />} name="Building & construction-nca
registered" />
                </Grid>
                <Grid item xs={12} md={4} className="flex flex-col gap-3 px-5">
                    <Item icon={<FaStoreAlt className="text-[70px] text-white" />} name="General supplies" />
                </Grid>
            </Grid>

            <Typography variant="h4" fontFamily="Lato" className=" " sx={{
                color: colors.yellow[500]
            }}
            >
                Other Services Offered
            </Typography>
            <Grid container spacing={5} >
                <Grid item xs={12} md={4} className="flex flex-col gap-3 px-5">
                    <Item icon={<IoIosConstruct className="text-[70px] text-white" />} name="Supply of all kinds
of building & Construction
materials." />
                </Grid>
                <Grid item xs={12} md={4} className="flex flex-col gap-3">
                    <Item icon={<AiOutlineMessage className="text-[70px] text-white" />} name="Architectural and
survey consultancy
services" />
                </Grid>
                <Grid item xs={12} md={4} className="flex flex-col gap-3">
                    <Item icon={<SiAltiumdesigner className="text-[70px] text-white" />} name="Interior design ,
partitioning and
painting" />
                </Grid>
                <Grid item xs={12} md={4} className="flex flex-col gap-3">
                    <Item icon={<GiGardeningShears className="text-[70px] text-white" />} name="Land Scaping" />
                </Grid>
                <Grid item xs={12} md={4} className="flex flex-col gap-3">
                    <Item icon={<RiSurveyLine className="text-[70px] text-white" />} name="Survey and design
of water facilities" />
                </Grid>
                <Grid item xs={12} md={4} className="flex flex-col gap-3">
                    <Item icon={<BsDroplet className="text-[70px] text-white" />} name="Supply of clean water" />
                </Grid>
            </Grid>
        </Grid>
        <Box className="flex-col  items-start  flex my-10 absolute left-10  max-w-[300px] -bottom-5">
            <Typography variant="h6" fontFamily="Lato" className=" text-black" >
                3.
            </Typography>

            <Box className="w-[50px] h-[3px]  my-3
        "  bgcolor='black'></Box>
            <Typography variant="body1" fontFamily="Lato" className="text-black text-[12px]" >
                Q UA L I T Y P R O F E S S I O N A L S E RV I C E S D E L I V E R E D A S A STA N DA R D . .
            </Typography>
        </Box>
    </Grid>;
};

export default Market;
