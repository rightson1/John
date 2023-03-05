/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
import { BiTargetLock } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
const Introduction = () => {
    const { colors } = useGlobalProvider();
    const Item = ({ icon, name, pr }) => (
        <Box className="bg-black py-10 gap-5 px-5 flex justify-center flex-col items-center w-[280px] h-[300px]">
            {icon}
            <Typography variant="h4" fontFamily="Lato" className=" text-white font-bold  " letterSpacing={10} textAlign="center">
                {name}
            </Typography>
            <Typography variant="body1" fontFamily="Lato" className="text-white text-[15px] mt-5" textAlign="center">
                {pr}
            </Typography>

        </Box>
    )
    return <Box container className="relative min-h-[90vh]">

        <Grid container rowSpacing={3} className="z-[6] h-[85%] flex    w-full   " >

            <Grid item xs={12} md={6} className="flex flex-col  h-full px-5  md:pl-20 z-10 py-20 gap-5"
                sx={{
                    bgcolor: colors.yellow[500],
                }} >
                <Typography variant="h1" fontFamily="Lato" className=" text-black font-bold " fontSize={{
                    xs: 30,
                    md: 50
                }} letterSpacing={{
                    xs: 10,
                    md: 20
                }} >
                    INTRODUCTION
                </Typography>
                {/* paragraph with normal font */}
                <Typography variant="body1" fontFamily="Lato" className="text-black text-[15px] mt-5" >
                    John Lee Miller Limited is a fast growing Building and
                    Construction company working towards being a world
                    class contractor. Through commitment to improvements
                    we are continuously seeking waste elimination, driving up
                    quality of our services and maximizing value to for clients.
                </Typography>
                <Typography variant="body1" fontFamily="Lato" className="text-black text-[15px] mt-5" >
                    Our teams are collaborative, cohesive and able to balance
                    the social, environmental and economic challenges of the
                    different stakeholders to create the right cost, quality and
                    efficiency for our clients
                </Typography>



            </Grid>
            <Grid item xs={12} md={6} className="z-10  self-end justify-end mt-10"
            >

                <Grid container>

                    <Grid item xs={12} md={6} className="flex flex-col justify-center items-center" >

                        <Item icon={<BiTargetLock className="text-[30px] text-white" />} name="Our Mission"
                            pr="To deliver the highest standards
in both workmanship,
professionalism and value for
money & to be the preferred
contractor by clients in the
building & Construction
industry"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} className="flex flex-col justify-center items-center gap-5 p-10 relative " >

                        <Item icon={<FaRegEye className="text-[30px] text-white" />} name="Our Vision"
                            pr="To grow into a world class
reliable building,
construction and general
supplies contractor."
                        />
                    </Grid>




                </Grid>

            </Grid>

        </Grid>










        <Grid container className="z-[3] absolute w-full h-full top-0 left-0  overflow-hidden" >

            <Grid item xs={12} md={4} className=" flex-col justify-center items-center gap-5 p-10 relative pb-[200px]  "
                sx={{
                    display: {
                        xs: 'none',
                        md: 'flex'
                    }
                }}>
                bbb
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        }
                    }}
                    className=" flex-col items-start gap-4 ">

                    <Box className="flex-col  items-start  flex my-10 absolute left-10 bottom-1">
                        <Typography variant="h6" fontFamily="Lato" className=" text-black" >
                            2.
                        </Typography>

                        <Box className="w-[50px] h-[3px]  my-3
        "  bgcolor='black'></Box>
                        <Typography variant="body1" fontFamily="Lato" className="text-black text-[12px]" >
                            Q UA L I T Y P R O F E S S I O N A L S E RV I C E S D E L I V E R E D A S A STA N DA R D . .
                        </Typography>
                    </Box>
                </Box>

            </Grid>

            <Grid item xs={12} md={8} className="z-[-1] build "
            >

            </Grid>


        </Grid>
    </Box>;
};


export default Introduction;
