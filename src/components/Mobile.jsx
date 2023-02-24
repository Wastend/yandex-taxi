import { Typography, Box, Link } from '@mui/material'
import googlePlay from '../source/googlePlay.png'
import backMobile from '../source/backMobile.png'
import mobiles from '../source/mobiles.png'
import React from 'react'

const Mobile = () => {
    return (
        <Box id='app' sx={{ display: 'flex', flexDirection: 'row', width: '100%', mb: '3rem' }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '40vh',
                width: '45%',
                backgroundColor: '#F0F0F0',
                p: '1rem 0 0 0'
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', m: '7% 7vw 0 7.3vw', gap: '2rem' }}>
                    <Typography variant='h4' fontWeight='bold'>
                        Мобильное приложение
                    </Typography>
                    <Typography fontSize='1.1rem'>
                        Мы разработали мобильное приложение для того, чтобы вам было удобно
                    </Typography>
                </Box>
                <Link
                    sx={{
                        width: '150px',
                        height: '80px',
                        margin: '3rem 0 0 6.9vw'
                    }}
                    href="https://play.google.com/store/apps/details?id=ru.yandex.taxi"
                    target="_blank"
                >
                    <Box
                        component="img"
                        alt="men"

                        src={googlePlay}
                    />
                </Link>


            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '41.7vh',
                    width: '55%',
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    backgroundImage: `url(${backMobile})`,
                    WebkitBackgroundSize: '100% 40vh',
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'row', gap:'15rem', width:'100%' }}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%',
                            height: '60vh',
                        }}
                        alt="men"
                        src={mobiles}
                    />
                </Box>

            </Box>


        </Box>
    )
}

export default Mobile