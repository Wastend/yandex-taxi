import React, { useState } from 'react'
import { Typography, Box, Button, Grid, Link, Snackbar, Alert } from '@mui/material'
import whatsApp from '../source/whatsApp.png';
import viber from '../source/viber.png';

const RequestContact = () => {
    const [message, setMessage] = useState(null)
    return (
        <Box id="contacts" sx={{ width: '65%', mb: '8rem' }}>
            <Snackbar open={message !== null} autoHideDuration={4000} onClose={() => setMessage(null)} anchorOrigin={{ vertical: 'top', horizontal: "center" }}>
                <Alert onClose={() => setMessage(null)} severity="success">{message}</Alert>
            </Snackbar>
            <Typography sx={{ margin: '10rem 0 3rem 10vw', fontWeight: 'bold' }} variant="h4">Контакты</Typography>
            <Grid container spacing={1} sx={{ display: 'flex', ml: '15rem' }}>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box sx={{ width: '30px', height: '30px', backgroundImage: `url(${whatsApp})`, WebkitBackgroundSize: '30px 30px' }} />
                    <Button variant='text' sx={{ textTransform: 'none', fontSize: '1.3rem', color: 'black' }} onClick={() => setMessage("Переход в What`s App")}>Написать в What`s App</Button>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography sx={{ color: '#8B8B8B', mr:'0.5rem' }}>тел.:</Typography>
                    <Typography variant='text' sx={{ fontSize: '1.3rem', color: 'black' }} >8 (3812) 49-46-45</Typography>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography sx={{ color: '#8B8B8B' }}>Email:</Typography>
                    <Button LinkComponent="a" href="mailto:info@taxi.ru" variant='text' sx={{ textTransform: 'none', fontSize: '1.3rem', color: 'black' }} >info@taxi.ru</Button>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box
                        sx={{
                            width: '30px',
                            height: '30px',

                            backgroundImage: `url(${viber})`,
                            WebkitBackgroundSize: '30px 30px',
                        }}
                    />
                    <Button variant='text' sx={{ textTransform: 'none', fontSize: '1.3rem', color: 'black' }} onClick={() => setMessage("Переход в Viber")}>Написать в Viber</Button>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography sx={{ color: '#8B8B8B', mr:'0.5rem' }}>тел.:</Typography>
                    <Typography variant='text' sx={{ fontSize: '1.3rem', color: 'black' }}>8 (903) 00-00-00</Typography>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography sx={{ color: '#8B8B8B', mr:'0.3rem' }}>Офис:</Typography>
                    <Typography variant='text' sx={{ textTransform: 'none', fontSize: '1.3rem', color: 'black' }}>г.Омск, ул. Дмитриева 15/1</Typography>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <Link href='https://yandex.ru/maps/66/omsk/house/ulitsa_dmitriyeva_15_1/Y0oYdQdkS0QBQFtufXV2eXpnZw==/?ll=73.304216%2C54.978643&z=17' target="_blank" sx={{ color: "gray", fontSize: "0.8rem" }}>Показать на карте</Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default RequestContact