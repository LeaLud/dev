import React from 'react';
import {Button, Container} from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import AddToQueueTwoToneIcon from '@mui/icons-material/AddToQueueTwoTone';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyTwoTone';


//import Button from '@mui/material/Button';
//import Icon from '@mui/material/Icon';

const MaterialUI = () => {
    return (

        // Definiendo el elemento Container
        <Container 
            maxWidth='md'
            sx={{backgroundColor:'darkBlue', py:5, my:5}}
        >
            {/* Combinando icono y texto en un botón */}
            <Button
                variant='contained'
                color='primary'
                startIcon={<FileCopyTwoToneIcon />}
            >
                Copiar
            </Button>

            <br />

            {/* Definiendo un botón típico */}
            <Button
                variant='contained'
                color='secondary'
            >Clic aquí
            </Button>

            <br /> 

            {/* Definiendo iconos */}
            <AddToQueueTwoToneIcon
                fontSize='80'
            />

            <AccessAlarmIcon
                sx={{ color: 'pink' }}
            />

            <ThreeDRotation
                color='primary'
            />

        </Container>
    )
}

export default MaterialUI;