import { Box, Typography } from '@mui/material'
import React from 'react'
import { AppButton } from '../common/StyledComponents'
import men from '../source/men.png'

const Marketing = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', width:'100%' }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '35vw',
                width: '47%',
                backgroundColor: '#F0F0F0',

            }}>
                <Box sx={{display:'flex',flexDirection:'column', gap:'2rem'}}>
                    <Box >
                        <Typography sx={{ fontSize: '2.5rem', fontWeight: '600' }}>
                            Водитель такси<br />на сменный график
                        </Typography>
                        <Typography sx={{ fontSize: '1.5rem' }}>
                            з/п от 25 000 руб до 50 000 руб
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '2.5rem', fontWeight: '600' }}>
                            Аренда автомобилей
                        </Typography>
                        <Typography sx={{ fontSize: '1.5rem' }}>
                            от 1 200 руб/сутки
                        </Typography>
                    </Box>

                    <AppButton sx={{width:'65%'}} variant="contained">
                        Заполнить анкету
                    </AppButton>

                </Box>

            </Box>
            <Box
                component="img"
                sx={{
                    height: '35vw',
                    width: '53%',
                }}
                alt="men"
                src={men}
            />

        </Box>
    )
}

export default Marketing