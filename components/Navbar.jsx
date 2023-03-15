import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useGlobalProvider } from "../utils/themeContext";
import { useRouter } from 'next/router'
import { useAuth } from '../utils/authContext';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import Link from 'next/link';
const nav = [{
    name: 'Home',
    link: '/'
},
{
    name: 'About Us ',
    link: '/about'
}, {
    name: 'Our Services',
    link: '/services'

}, {
    name: 'Projects',
    link: '/projects'
},

{
    name: 'News And Blog',
    link: '/blogs'
}
    ,
{
    name: 'Contact Us',
    link: '/contact'
}
]
function Navbar() {
    const router = useRouter()
    const path = router.pathname;
    const { colors, setOpen } = useGlobalProvider()
    const handleOpenNavMenu = (event) => {
        setOpen(true)
    };
    return (
        <Box
            sx={{
                flexGrow: 1,
                width: "100%",
                top: 0,
                zIndex: 1000,
                left: 0,

                // bgcolor: colors.primary[500]
            }}
            className="z-10"
        >
            <AppBar position="static" sx={{
                background: 'inherit',
                boxShadow: 'none',
                position: 'relative',
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutter
                        className='flex'>
                        <Box
                            variant="h6"
                            noWrap
                            component="button"
                            className='flex flex-row items-center gap-4 flex-1 '
                            onClick={() => { router.push('/') }}
                            sx={{
                                fontFamily: 'Regular',
                                fontWeight: 700,

                                color: colors.grey[100],
                            }}
                        >
                            <div className="flex gap-3">
                                <img src="/svgs/call.svg" className='w-[15px]' alt="" />
                                <Typography fontFamily="Lato">
                                    +254741381552
                                </Typography>
                            </div>
                            <div className="flex gap-3">
                                <img src="/svgs/email.svg" className='w-[15px]' alt="" />
                                <Typography fontFamily="Lato">
                                    mail@jlmillerltd.com
                                </Typography>

                            </div>
                            <div className="flex gap-3 items-center">
                                <img src="/svgs/location.svg" className='w-[15px]' alt="" />
                                <div className="flex flex-col">
                                    <Typography fontFamily="Lato" className="flex text-[13px]  ">
                                        Chelezo Apartments Kindaruma Road

                                    </Typography>
                                    <Typography fontFamily="Lato" className="flex text-[13px]  ">
                                        P O Box 5401-001, Nairobi.
                                    </Typography>
                                </div>
                            </div>
                        </Box>
                        <div className="flex gap-3 items-center color-black">
                            <img src="/svgs/fb.svg" className='w-[15px]' alt="" />
                            <img src="/svgs/insta.svg" className='w-[15px]' alt="" />
                            <img src="/svgs/twitter.svg" className='w-[15px]' alt="" />
                            <img src="/svgs/linked.svg" className='w-[15px]' alt="" />
                            <img src="/svgs/whatsap.svg" className='w-[15px]' alt="" />
                        </div>
                    </Toolbar>
                </Container>
                <Box
                    className="flex justify-center items-center  absolute -bottom-[50px] z-10 w-full">
                    <div className="flex gap-3 bg-white shadow-md">
                        {
                            nav.map((item, index) =>
                                <Link href={`${item.link}`} key={index}>
                                    <Button className="uppercase rounded-none py-4  px-6 hover:bg-primary text-black"
                                        sx={{
                                            bgcolor: item.link == path && colors.black[100] + '!important',
                                            color: item.link == path && colors.yellow[500] + '!important',

                                        }}
                                    >
                                        {item.name}

                                    </Button>
                                </Link>


                            )
                        }
                    </div>

                </Box>
            </AppBar>
            <AppBar position="static" sx={{
                background: 'inherit',
                boxShadow: 'none',
                display: {
                    xs: 'flex',
                    md: 'none'
                }
            }}>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters
                        className='flex justify-between'>
                        <Box
                            variant="h6"
                            noWrap
                            component="button"
                            onClick={() => { router.push('/') }}
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'Lato',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: colors.grey[100],
                                textDecoration: 'none',
                                fontSize: {
                                    xs: '1.8rem',
                                },

                            }}
                        >
                            {/* JLM */}
                            <img src="/logo.png" className='w-[50px] rounded-full' alt="" />
                            {/* <img src="/logo.svg" className='w-[40px]' alt="" /> */}
                        </Box>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon className="text-black"
                                onClick={handleOpenNavMenu}
                                sx={{
                                    color: colors.grey[100],
                                    fontSize: "2.5rem"
                                }} />
                        </IconButton>

                    </Toolbar>
                </Container>
            </AppBar>

        </Box >
    );
}
export default Navbar;
