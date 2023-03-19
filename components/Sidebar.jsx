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
import Link from 'next/link';
export default function TemporaryDrawer() {
    const { open, setOpen, setSection } = useGlobalProvider()
    const router = useRouter();
    const path = router.pathname.split('/')[1]

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

            <List
            >
                {
                    listItems.map((item, index) => {


                        return (
                            <Box key={index}>
                                {!!item.same ? (
                                    <ListItemButton className='py-5'

                                        onClick={() => {
                                            !path ? setSection(item.same) : router.push(`/#${item.same}`)
                                        }}
                                    >

                                        <ListItemText>
                                            {item.name}
                                        </ListItemText>
                                    </ListItemButton>
                                ) : (
                                    <Link href={item.link}>
                                        <ListItemButton className='py-5'>

                                            <ListItemText>
                                                {item.name}
                                            </ListItemText>
                                        </ListItemButton>
                                    </Link>
                                )

                                }
                            </Box>
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

const listItems = [{
    name: 'Home',
    link: '/'
},
{
    name: 'About Us ',
    link: '/about',
    same: "about"
}, {
    name: 'Our Services',
    link: '/services',
    same: "services"

}, {
    name: 'Projects',
    link: '/projects'
},

{
    name: 'News And Blogs',
    link: '/blogs'
}
    ,
{
    name: 'Contact Us',
    link: '/contact'
}
]