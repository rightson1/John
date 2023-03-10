import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { useGlobalProvider } from '../utils/themeContext';
import { Dashboard, Sell } from '@mui/icons-material';
import { Button, IconButton, ListItemIcon } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/authContext';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BookIcon from '@mui/icons-material/Book';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
export default function PlaceDrawer() {
    const { open, setOpen, colors } = useGlobalProvider()

    const toggleDrawer = (click) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(click);
    };

    const list = () => (
        <Box className="px-2 bg-transparent"
            sx={{
                py: 2,
                pb: 5,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}

        >
            <Box className="flex justify-between">
                <img src="/logo.png" className='w-[50px] rounded-full' alt="" />
                <IconButton className='self-end jus'>
                    <CloseIcon className='text-[30px]' />
                </IconButton>
            </Box>

            <List className="flex flex-col gap-5 mt-5 pl-[50px]"
            >

                <div className="flex gap-3">
                    <img src="/svgs/call.svg" className='w-[15px]' alt="" />
                    <Typography fontFamily="Hec">
                        +254741381552
                    </Typography>
                </div>
                <div className="flex gap-3">
                    <img src="/svgs/email.svg" className='w-[15px]' alt="" />
                    mail@jlmillerltd.com
                </div>
                <div className="flex gap-3 items-center">
                    <img src="/svgs/location.svg" className='w-[15px]' alt="" />
                    <div className="flex flex-col">
                        <div className="flex text-[13px]  ">
                            Chelezo Apartments Kindaruma Road

                        </div>
                        <div className="flex text-[13px]  ">
                            P O Box 5401-001, Nairobi.
                        </div>
                    </div>
                </div>

            </List>
            <div className="flex gap-3 items-center color-black justify-center pt-5">
                <img src="/svgs/fb.svg" className='w-[25px]' alt="" />
                <img src="/svgs/insta.svg" className='w-[25px]' alt="" />
                <img src="/svgs/twitter.svg" className='w-[25px]' alt="" />
                <img src="/svgs/linked.svg" className='w-[25px]' alt="" />
                <img src="/svgs/whatsap.svg" className='w-[25px]' alt="" />
            </div>
        </Box>
    );

    return (
        <div>

            <React.Fragment >
                <Drawer
                    anchor="top"
                    open={open}


                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </React.Fragment>

        </div>
    );
}

const listItems = [

    {
        name: 'Home',
        link: '/',
        icon: <Dashboard />

    },
    {
        name: 'ABOUT US',
        link: '/',
        icon: <QuestionMarkOutlinedIcon />

    },
    {
        name: 'OUR SERVICES',
        link: '/',
        icon: <MiscellaneousServicesOutlinedIcon />

    },
    {
        name: 'PROJECTS',
        link: '/',
        icon: <HomeWorkIcon />

    },
    {
        name: 'NEW & BLOGS',
        link: '/',
        icon: <BookIcon />

    },
    {
        name: 'CONTACT US',
        link: '/',
        icon: <CallOutlinedIcon />

    },


]
