/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Button, Typography, Grid, IconButton } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
import SendIcon from '@mui/icons-material/Send';
const Contact = () => {
    const { colors } = useGlobalProvider();

    return <Box container gap={2} className="min-h-screen z-[3] relative flex  items-center w-full"

    >

        <div className="flex justify-center  pl-5 md:pl-10 lg:pl-[200px]">
            <Box className="min-h-[400px] w-[90vw] md:w-[400px] z-[7] bg-black px-5 py-10 flex flex-col gap-2"

            >
                <Typography variant="h3" fontFamily="Hec" className=" text-white font-[900]  " >
                    DROP US A
                </Typography>

                <Box className="w-[100px] h-[7px]  my-3 flex justify-center items-start
        "  bgcolor={colors.yellow[500]}></Box>
                <Typography variant="body1" fontFamily="Lato" className=" text-white text-xl" >
                    We value what you have to say leave us a message
                </Typography>
                <div className="flex gap-4 flex-col">
                    <input type="text" className="bg-white w-full outline-none px-1 h-[40px]"
                        placeholder="Your Name"
                    />
                    <input type="email" className="bg-white w-full outline-none px-1 h-[40px]"
                        placeholder="Your Email"
                    />
                    <textarea type="text" className="bg-white w-full outline-none px-1 h-[90px]"
                        placeholder="Message"
                    />
                    <IconButton className="justify-end">
                        <SendIcon className="text-white text-4xl" sx={{
                            color: colors.yellow[500] + " !important",
                        }} />
                    </IconButton>

                </div>


            </Box>



        </div>
        <Box className="absolute bg-black h-[65%]  w-screen top-0 z-[1]"
            sx={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url("/wood.png")',

            }}

        >

        </Box>

    </Box>

};

Contact.layout = true;
export default Contact;
