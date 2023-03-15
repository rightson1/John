import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useGlobalProvider } from "../../utils/themeContext";

const ProjectHeader = ({ project }) => {
    const { name, coverImage, author, date } = project.fields;
    const { url } = coverImage.fields.file;
    const { colors } = useGlobalProvider();

    return <Box sx={{
        backgroundImage: `url(${url})`,
    }} className="flex h-[40vh]  justify-center align-center items-center flex-col w-full">

        <Typography variant="h1" fontFamily="Hec" className=" text-white font-[900] " fontSize={{
            xs: 30,
            md: 35,
            lg: 65
        }}>
            {name}
        </Typography>

        <Box className="w-[100px] h-[7px]  my-3 flex justify-center items-start
        "  bgcolor={colors.yellow[500]}></Box>
    </Box>
};

export default ProjectHeader;