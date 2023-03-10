import { Grid, Typography } from '@mui/material';
import { format } from 'timeago.js';
import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfullImage'
import DateComponent from '../ui/DateComponent'

const PostHeader = ({ post }) => {
    const { title, coverImage, author, date } = post.fields;
    const { url } = coverImage.fields.file;
    const { name } = author.fields;

    return (
        <Grid container spacing={5} className="">
            <Grid item xs={12} md={6}>
                <img src={url} alt="" />
            </Grid>
            <Grid item xs={12} md={6} className="flex flex-col gap-3 justify-center">
                <Typography variant='h1' fontFamily="Hec">
                    {title}
                </Typography>
                <Typography variant='h5' fontFamily="Hec">
                    by {name}
                </Typography>
                <Typography variant='body1' fontFamily="Hec" className='flex justify-between'>
                    <DateComponent dateString={date} className='text-sm text-gray-400' />
                    <span className='italic'>
                        {format(date)}
                    </span>
                </Typography>


            </Grid>
        </Grid>
    )
}

export default PostHeader