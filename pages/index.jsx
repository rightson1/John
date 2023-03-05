import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";

export default function Home() {
    const { colors } = useGlobalProvider();
    const router = useRouter();
    return (

        <Box className="landing h-screen px-10 md:px-20 pb-4 md:pb-0 pt-10 flex flex-col justify-between ">
            <img src="/heroLogo.svg" alt="" className="w-[150px] md:w-[200px]" />
            <div className="flex justify-between items-start  w-full  flex-col md:flex-row ">
                <div className="w-full md:w-[400px] h-[200px] md:h-[250px] bg-black  flex justify-center flex-col px-5"
                >
                    <Typography variant="h1" fontFamily="Lato" className=" text-white font-[900] " fontSize={{
                        xs: 30,
                        md: 35
                    }}>
                        COMING SOON!
                    </Typography>

                    <Box className="w-[100px] h-[10px]  my-3 flex justify-center items-start
        "  bgcolor={colors.yellow[500]}></Box>

                    <Typography variant="h3" fontFamily="Lato" className=" text-white font-[600] " fontSize={{
                        xs: 15,
                        md: 20
                    }}>
                        Delivering The Highest Standards
                    </Typography>
                    <Typography variant="body1" fontFamily="Lato" sx={{
                        color: colors.yellow[500]
                    }} className=" text-[15px] mt-5" >
                        in both workmanship, professionalism
                        and value for money
                    </Typography>
                </div>
                <Button className="justify-evenly w-[200px] h-[50px] rounded-none self-center"
                    onClick={() => { router.push('/homepage') }}
                    sx={{
                        backgroundColor: colors.yellow[500] + " !important",
                        display: {
                            xs: 'none',
                            md: 'flex'
                        }
                    }}>

                    <img src="/eye.svg" alt="" className="w-[30px]" />
                    <Typography className="text-black">Visit Our Profile</Typography>
                </Button>
            </div>
            <Button className="justify-evenly w-[200px] h-[50px] rounded-none self-center"
                onClick={() => { router.push('/homepage') }}
                sx={{
                    backgroundColor: colors.yellow[500] + " !important",
                    display: {
                        xs: 'flex',
                        md: 'none'
                    }
                }}>

                <img src="/eye.svg" alt="" className="w-[30px]" />
                <Typography className="text-black">Visit Our Profile</Typography>
            </Button>


        </Box>
    );

}

