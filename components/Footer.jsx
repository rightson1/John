import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { useRouter } from "next/router";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
const Footer = () => {
    const router = useRouter()
    const path = router.pathname.split('/')[1]
    const { colors, setSection } = useGlobalProvider()
    return <Grid className='text-white md:px-20 llg:px-[110px] relative'
        sx={{
            pb: {
                xs: 10,
                sm: 10,
                md: 2,
            }
        }}
        columnSpacing={6}

        container bgcolor={colors.grey[100]}>
        <Grid item xs={12} md={12} lg={4} className="flex flex-col md:flex-row justify-center items-center p-4 gap-4  md:gap-2 py-[100px]">
            <img src="/flogo.svg" alt="" className="max-w-[150px] max-h-[130px] " />
            <Typography className="py-2 text-white  px-2 text-[13px] text-center md:text-left max-w-[350px]" color={colors.grey[100]} variant="body1" fontFamily="Lato">
                John Lee Miller Limited is a fast growing
                Building and Construction company working towards being a world class contractor.
            </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={6} className="flex flex-col md:flex-row justify-start items-center gap-2  md:gap-5 -mt-[80px] md:mt-0">
            <Box className="flex flex-col justify-start items-start  ">
                <div className="flex flex-col pl-5">
                    <Typography className="font-semibold text-white " color={colors.grey[100]} variant="h6" fontFamily="Lato">
                        Quick Links
                    </Typography>
                    <Box className="w-[70px] h-[5px]  my-3 flex justify-center items-start
        "  bgcolor={colors.yellow[500]}></Box>
                </div>
                {pages.map((item, index) => {
                    return (
                        <ListItem key={index}
                            onClick={() => {
                                !!item.same ? (!path ? setSection(item.same) : router.push(`/#${item.same}`)) : router.push(item.link)
                            }}
                            sx={{
                                display: 'flex',
                                py: "3px",

                            }}
                        >
                            <Typography

                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'flex' },
                                    fontFamily: 'Lato',
                                    fontWeight: 700,
                                    color: colors.grey[900],
                                    textAlign: 'left',
                                    textDecoration: 'none',
                                    "&:hover": {
                                        color: colors.grey[700],
                                        textDecoration: 'underline',

                                    }

                                }}

                            >{item.name}</Typography>
                        </ListItem>
                    )
                })}

            </Box>
            <Box className="flex-1 w-full  flex flex-col gap-2 mt-5 items-center">
                <Typography className="font-semibold text-white text-center md:text-start" color={colors.grey[100]} variant="h6" fontFamily="Lato">
                    Subscribe to our Newsletter
                </Typography>
                <div className=" flex-1 flex justify-center  items-center w-[90%] md:w-full">
                    <input type="text" className=' px-4 outline-none w-3/4 h-[40px]' />
                    <Button>
                        <SendIcon className='text-[40px] text-white' sx={{
                            color: colors.yellow[500] + '!important',
                        }} />
                    </Button>

                </div>
            </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={2} className="flex  justify-center items-center px-1 pr-3 md:pr-0">
            <Button
                onClick={() => { router.push('/jml.pdf') }}
                className="uppercase rounded-none py-3   text-black flex items-center w-[84%] md:w-full justify-center px-4"
                sx={{
                    bgcolor: colors.yellow[500] + '!important',
                    color: colors.grey[100] + '!important',
                    mt: 4
                }}
            >
                <RemoveRedEyeOutlinedIcon className="mr-2" />
                View Profile
            </Button>
        </Grid>
        <Grid item xs={12} md={12} className="text-white absolute bottom-0 left-0 w-full flex  flex-col md:flex-row justify-between py-1 px-5" sx={{


            bgcolor: colors.yellow[500],
        }}>
            <Typography className="text-black text-center py-1 px-3 font-[500]" color={colors.grey[100]} variant="body1" fontFamily="Lato">
                Designed by <a href="https://tabaladigital.co.ke/" target="_blank" className="text-black underline" rel="noreferrer">Tabala Digital Solutions</a>


            </Typography>
            <Typography className="text-black text-center py-1 px-2 font-[500]" color={colors.grey[100]} variant="body1" fontFamily="Lato">
                © 2021 John Lee Miller Limited. All Rights Reserved.
            </Typography>
        </Grid>

    </Grid>;
};

const pages = [
    {
        name: 'About Us',
        link: '/about',
        same: "about"
    }, {
        name: 'Our Service',
        link: '/services',
        same: "services"

    }, {
        name: 'Contact Us',
        link: 'contact'
    }
]
export default Footer;
