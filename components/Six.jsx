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
        className="px-1 md:px-[80px] flex justify-center flex-col items-center py-20">

        <Typography className="font-semibold" textAlign="center" color={colors.grey[100]} variant="h4" fontFamily="Hec">
            OUR PATNERS AND CLIENTS
        </Typography>
        <Box className="w-[100px] h-[5px]  my-3
        "  bgcolor={colors.yellow[500]}></Box>

        <Box className="flex flex-wrap justify-center items-start">

            {list.map((item, index) => (
                <Box className="w-[200px] flex flex-col justify-center items-center" key={index}>

                    <img src={item.img} alt="" className="w-[100px] h-[100px] max-w-[250px]" />
                    <Typography className="font-semibold pr-5" textAlign="center" color={colors.grey[100]} fontFamily="Lato">
                        {item.title}
                    </Typography>

                </Box>

            ))}
        </Box>
    </Grid>
};

const list = [
    {
        title: "Other contractors in the building & construction industry",
        img: "/PNG/1.png"

    },
    {
        title: "General Suppliers",
        img: "/PNG/2.png"
    },
    {
        title: "Private Sector",
        img: "/PNG/3.png"

    },
    {
        title: "County Government",
        img: "/PNG/4.png"

    },
    {
        title: "National Government",
        img: "/PNG/5.png"
    }

]
export default Six;
