import { Box, Button, Grid, Typography } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";

const Six = () => {
    const { colors } = useGlobalProvider();
    return <Grid
        className="px-1 md:px-[80px] flex justify-center flex-col items-center py-20">

        <Typography className="font-semibold" textAlign="center" color={colors.grey[100]} variant="h2" fontFamily="Hec">
            OUR PATNERS AND CLIENTS
        </Typography>
        <Box className="w-[100px] h-[5px]  my-3
        "  bgcolor={colors.yellow[500]}></Box>

        <Box className="flex flex-wrap justify-center items-start my-7 ">

            {list.map((item, index) => (
                <Box className="w-[45%]  md:w-[200px] flex flex-col justify-center items-center mt-2" key={item.title}>

                    <img src={item.img} alt="" className="w-[100px] h-[100px] max-w-[250px]" />
                    <Typography className="font-semibold pr-5" textAlign="center" color={colors.grey[100]} fontFamily="Lato">
                        {item.title}
                    </Typography>

                </Box>

            ))}
        </Box>
    </Grid>
};

const list = [
    {
        title: "Other contractors in the building & construction industry",
        img: "/PNG/1.png"

    },
    {
        title: "General Suppliers",
        img: "/PNG/2.png"
    },
    {
        title: "Private Sector",
        img: "/PNG/3.png"

    },
    {
        title: "County Government",
        img: "/PNG/4.png"

    },
    {
        title: "National Government",
        img: "/PNG/5.png"
    }

]
export default Six;
