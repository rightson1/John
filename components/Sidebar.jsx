import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import InfoIcon from '@mui/icons-material/Info';
import ListItemText from '@mui/material/ListItemText';
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
export default function TemporaryDrawer() {
    const { open, setOpen, colors } = useGlobalProvider()
    const { admin, logout } = useAuth()

    const router = useRouter()

    const toggleDrawer = (click) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(click);
    };

    const list = () => (
        <Box className="px-2"
            sx={{
                width: 250,
                height: '100%',
                py: 2,
                pb: 10,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}

        >
            <Box className="flex justify-between">
                <Typography fontFamily="Lito" className='font-bold text-2xl'>
                    JVM
                </Typography>
                <IconButton className='self-end jus'>
                    <CloseIcon />
                </IconButton>
            </Box>

            <List
            >
                {
                    listItems.map((item, index) => {


                        return (
                            <>
                                <ListItemButton className='py-5'>
                                    <ListItemIcon sx={{
                                        // color: colors.yellow[500]
                                    }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {item.name}
                                    </ListItemText>
                                </ListItemButton>
                            </>
                        )

                    })
                }
            </List>
        </Box>
    );

    return (
        <div>

            <React.Fragment >
                <Drawer
                    anchor="left"
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
        link: '/about',
        icon: <QuestionMarkOutlinedIcon />

    },
    {
        name: 'OUR SERVICES',
        link: '/services',
        icon: <MiscellaneousServicesOutlinedIcon />

    },
    {
        name: 'PROJECTS',
        link: '/projects',
        icon: <HomeWorkIcon />

    },
    {
        name: 'NEW & BLOGS',
        link: '/blogs',
        icon: <BookIcon />

    },
    {
        name: 'CONTACT US',
        link: '/contact us',
        icon: <CallOutlinedIcon />

    },


]
