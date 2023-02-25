import { Alert, Box, Link, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import lanos from '../source/lanos.png'
import logan from '../source/logan.png'
import accent from '../source/accent1.png'
import almera from '../source/almera.png'
import { AppButton } from '../common/StyledComponents'

const SelectCar = () => {
    const [message, setMessage] = useState(null)
    return (
        <Box id='selectCar'>
            <Snackbar open={message !== null} autoHideDuration={4000} onClose={() => setMessage(null)} anchorOrigin={{ vertical: 'top', horizontal: "center" }}>
                <Alert onClose={() => setMessage(null)} severity="success">{message}</Alert>
            </Snackbar>
            <Typography sx={{ margin: '5rem 0 5rem 10vw', fontWeight: 'bold' }} variant="h4">Выберите автомобиль</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 6.5rem 1rem 6.5rem' }}>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20vw' }}>
                    <Box>
                        <img src={lanos} alt='Chevrolet Lanos' />
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '1rem 0 0 2rem' }}>
                            <AppButton variant="contained" onClick={() => setMessage("Вы выбрали машину Chevrolet Lanos")}>
                                Chevrolet Lanos
                            </AppButton>
                            <Typography variant='h6' sx={{ ml: '2rem' }}>1 000 руб./сутки</Typography>
                        </Box >
                        <Link href='#request' sx={{ display:'flex', color:'black', fontSize:'1.1rem', textDecoration: 'underline', margin: '1rem 0 0 2rem' }}>Арендовать</Link>

                    </Box>
                    <Box>
                        <img src={logan} alt='Renault Logan' />
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: '2rem' }}>
                            <AppButton variant="contained" onClick={() => setMessage("Вы выбрали машину Renault Logan")}>
                                Renault Logan
                            </AppButton>
                            <Box>
                                <Typography variant='h6' sx={{ ml: '2rem' }}>1 000 руб./сутки (1 поколение)</Typography>
                                <Typography variant='h6' sx={{ ml: '2rem' }}>1 500 руб./сутки (2 поколение)</Typography>
                            </Box>

                        </Box >
                        <Link href='#request' sx={{ display:'flex', color:'black', fontSize:'1.1rem', textDecoration: 'underline', margin: '1rem 0 0 2rem' }}>Арендовать</Link>
                    </Box>

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '20vw' }}>
                    <Box>
                        <img src={accent} alt='Hyundai Accent' />
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '1rem 0 0 0.5rem' }}>
                            <AppButton variant="contained" onClick={() => setMessage("Вы выбрали машину Hyundai Accent")}>
                                Hyundai Accent
                            </AppButton>
                            <Typography variant='h6' sx={{ ml: '2rem' }}>1 000 руб./сутки</Typography>
                        </Box >
                        <Link href='#request' sx={{ display:'flex', color:'black', fontSize:'1.1rem', textDecoration: 'underline', margin: '1rem 0 0 0.5rem' }}>Арендовать</Link>

                    </Box>
                    <Box>
                        <img src={almera} alt='Nissan Almera' />
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '1rem 0 0 2rem' }}>
                            <AppButton variant="contained" onClick={() => setMessage("Вы выбрали машину Nissan Almera")}>
                                Nissan Almera
                            </AppButton>
                            <Typography variant='h6' sx={{ ml: '2rem' }}>1 000 руб./сутки</Typography>
                        </Box >
                        <Link href='#request' sx={{ display:'flex', color:'black', fontSize:'1.1rem', textDecoration: 'underline', margin: '1rem 0 0 2rem'  }}>Арендовать</Link>

                    </Box>



                </Box>
            </Box>
        </Box>

    )
}

export default SelectCar