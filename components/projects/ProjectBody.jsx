import { Box, Grid } from '@mui/material';
import RichText from '../RichText'
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import * as React from 'react';
const ProjectBody = ({ project }) => {
    const { content, images } = project.fields;
    const [open, setOpen] = React.useState(null);
    const handleClose = () => setOpen(null);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
    };
    return (

        <div className='w-full flex justify-center  flex-col '>
            <div className='max-w-none prose mt-10 px-5  '>
                <RichText content={content} />

            </div>
            <Grid className="my-10 px-5" container spacing={3}>
                {images.map((image, index) => {
                    return (
                        <Grid item xs={12} md={4} key={index}>
                            <Box component="img"
                                onClick={() => setOpen(image.fields.file.url)}
                                className='w-full h-full object-cover max-h-[250px]  cursor-pointer'
                                src={image.fields.file.url}
                                sx={{ width: '100%', height: '100%', bgcolor: 'grey.500' }} />
                        </Grid>
                    )
                }
                )}
            </Grid>
            <Modal
                className='w-full h-full flex justify-center items-center p-10 md:p-[100px] '
                open={!!open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    bgcolor: 'rgba(0,0,0,0.5)',
                }}
            >

                <Box component="img"
                    onClick={handleClose}
                    className='w-full h-full object-cover '
                    src={open}
                    sx={{ width: '100%', height: '100%', bgcolor: 'grey.500' }} />
            </Modal>
        </div>
    )
}

export default ProjectBody