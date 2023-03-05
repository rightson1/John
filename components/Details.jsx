/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
const Details = () => {
    const { colors } = useGlobalProvider();
    const Item = ({ name, pr }) => (
        <div className="flex flex-col gap-2">
            <Typography variant="h4" fontFamily="Lato" className="font-bold" sx={{
                color: colors.yellow[500],
            }}>
                {name}
            </Typography>
            <Typography variant="body2" fontFamily="Lato" className="text-white">
                {pr}
            </Typography>

        </div>
    )
    return <Grid container className="md:min-h-screen partner">

        <Grid item xs={12} md={5} className="md:pt-2  relative" >
            <Box className="absolute h-[400px] md:h-[420px] top-0  md:top-2 right-0 top-clip  w-[300px] z-[6]  " sx={{
                bgcolor: colors.yellow[500],
                clipPath: {
                    xs: 'polygon(76% 0, 100% 23%, 100% 0)',
                    md: 'polygon(76% 0, 100% 25%, 100% 0)',

                }
            }}
            >

            </Box>
            <div className="w-full h-full bg-black flex flex-col px-5 py-10 justify-center gap-4 clip">



                <Typography variant="h3" fontFamily="Lato" className="font-bold" sx={{
                    color: colors.yellow[500],
                }}>
                    KEY COMPANY DETAILS
                </Typography>
                <Item name="Company Name" pr="John Lee Miller Limited" />
                <Item name="Certificate of Registration" pr="PVT-DLU5PYK" />
                <Item name="Country of Registration" pr="Kenya" />
                <Item name="Date of Registration" pr="2nd September, 2020" />
                <Item name="Company Pin Number" pr="P051939263A" />
                <Box className="w-[70px] h-[10px]  my-3
        "  bgcolor={colors.yellow[500]}></Box>
                <Item name="Head Office" pr="Nairobi City" />
                <Item name="Physical Address" pr="Chelezo Apartments Kindaruma Road
P O Box 5401-001, Nairobi." />
                <div className="flex w-full gap-6 justify-between">
                    <Item name="Email Address" pr="mail@jlmillerltd.com" />
                    <Item name="Telephone
+254741381552" pr="+254741381552" />
                </div>
                {/* <Box sx={{
                    display: {
                        xs: "block",
                        md: "none"
                    }
                }} className="self-end flex-col  items-end ">
                    <Typography variant="h6" fontFamily="Lato" className=" text-white" >
                        1.
                    </Typography>

                    <Box className="w-[50px] h-[3px]  my-3
        "  bgcolor='white'></Box>
                    <Typography variant="body1" fontFamily="Lato" className="text-white text-[12px]" >
                        Q UA L I T Y P R O F E S S I O N A L S E RV I C E S D E L I V E R E D A S A STA N DA R D . . .
                    </Typography>
                </Box> */}

            </div>

        </Grid>
        <Grid item xs={12} md={7} className=" relative " sx={{
            display: {
                xs: "none",
                md: "block"
            }
        }}>
            <div className="absolute bottom-10 right-10 flex flex-col  items-end">
                <Typography variant="h6" fontFamily="Lato" className="font-bold" sx={{
                    color: colors.yellow[500],
                }}>
                    1.
                </Typography>

                <Box className="w-[50px] h-[4px]  my-3
        "  bgcolor={colors.yellow[500]}></Box>
                <Typography variant="body1" fontFamily="Lato" className="" sx={{
                    color: colors.yellow[500],
                }}>
                    Q UA L I T Y P R O F E S S I O N A L S E RV I C E S D E L I V E R E D A S A STA N DA R D . . .
                </Typography>
            </div>

        </Grid>
    </Grid>;
};


export default Details;
