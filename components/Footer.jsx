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
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const Footer = () => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        emailjs
            .sendForm(
                "service_0ady6pa",
                "template_ver6v3e",
                e.target,
                "5kOjUoERLzqz_vj0O"
            )
            .then((res) => {
                e.target.reset();
                setLoading(false);
                toast.success('Message sent, will get back to you as soon as possible')
            })
            .catch((e) => {
                toast.error('Sorry, there was an error')

                setLoading(false);

            });
        e.target.reset();

    }
    const { colors } = useGlobalProvider()
    return <Grid className='text-white'
        sx={{
            pb: {
                xs: 8,
                sm: 8,
                md: 2,
            }
        }}

        container bgcolor={colors.grey[100]}>
        <Grid item xs={12} sx={{
            display: {
                xs: 'none',
                md: 'flex'
            }
        }} md={4} className=" flex-col md:flex-row justify-center items-center p-4 gap-4 py-[100px]">
            <img src="/asset.png" alt="" className="max-w-[150px] max-h-[100px] " />
            <Typography className="py-2 text-white  px-4" textAlign="center" color={colors.grey[100]} variant="body1" fontFamily="Lato">
                John Lee Miller Limited is a fast growing
                Building and Construction company working towards being a world class contractor.
            </Typography>
        </Grid>
        <Grid item xs={12} md={5} className="flex flex-col md:flex-row justify-center items-center p-4 gap-4  ">
            <Box className="flex flex-col justify-center items-start">
                <div className="flex flex-col pl-5">
                    <Typography className="font-semibold text-white " color={colors.grey[100]} variant="h6" fontFamily="Lato">
                        Quick Links
                    </Typography>
                    <Box className="w-[70px] h-[5px]  my-3 flex justify-center items-start
        "  bgcolor={colors.yellow[500]}></Box>
                </div>
                {pages.map((item, index) => {
                    return (
                        <ListItemButton key={index}
                            onClick={() => router.push(item.link)}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            <Typography

                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'flex' },
                                    fontFamily: 'Lato',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',

                                    color: colors.grey[900],
                                    textDecoration: 'none',
                                    "&:hover": {
                                        color: colors.grey[700],
                                        textDecoration: 'underline',

                                    }

                                }}

                            >{item.name}</Typography>
                        </ListItemButton>
                    )
                })}

            </Box>
            <Box className="flex-1 w-full  flex flex-col gap-2">
                <Typography className="font-semibold text-white" color={colors.grey[100]} variant="h6" fontFamily="Lato">
                    Subscribe to our Newsletter
                </Typography>
                <div className=" flex-1 flex justify-between items-center">
                    <input type="text" className=' px-4 outline-none w-3/4 h-[40px]' />
                    <Button>
                        <SendIcon className='text-[40px] text-white' />
                    </Button>

                </div>
            </Box>
        </Grid>
        <Grid item xs={12} md={3} className="flex  justify-center items-center px-5">
            <Button
                className="uppercase rounded-none py-3   text-black flex items-center w-full"
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
        <Toaster />
    </Grid>;
};

const pages = [
    {
        name: 'About Us',
        link: '/about'
    }, {
        name: 'Our Service',
        link: '/services',

    }, {
        name: 'Contact Us',
        link: 'contact'
    }
]
export default Footer;
