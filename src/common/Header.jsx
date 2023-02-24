import { Box, Typography, Button, Link } from '@mui/material'
import logo from '../source/yandex_taxi_logo.svg'
import React from 'react'

const Header = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative', verticalAlign: 'midle', justifyContent: 'space-between', margin: '2rem 6.5rem 0 6.5rem' }}>

            <Box sx={{ width: '15rem', height: '2rem', display: 'flex', flexDirection: 'row', gap: '2rem', flex: 1 }}>
                <img src={logo} alt='logo' />
                <Typography sx={{ color: '#8B8B8B' }}>Официальный партнер<br />г.Омск</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5rem', m: '0 0 1rem 7rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
                    <Link href="#selectCar" sx={{ color: '#8B8B8B', fontSize: '1.3rem', textDecorationLine:'none', '&:hover':{color:'black'} }}>Выбрать авто</Link>
                    <Link href="#startWork" sx={{ color: '#8B8B8B', fontSize: '1.3rem', textDecorationLine:'none', '&:hover':{color:'black'} }}>Начало работы</Link>
                    <Link href="#privilege" sx={{ color: '#8B8B8B', fontSize: '1.3rem', textDecorationLine:'none', '&:hover':{color:'black'} }}>Преимущество работы</Link>
                    <Link href="#app" sx={{ color: '#8B8B8B', fontSize: '1.3rem', textDecorationLine:'none', '&:hover':{color:'black'} }}>Приложение</Link>
                    <Link href="#contacts" sx={{ color: '#8B8B8B', fontSize: '1.3rem', textDecorationLine:'none', '&:hover':{color:'black'} }}>Контакты</Link>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>8 (3812) 49-46-45</Typography>
                    <Button variant='text' sx={{ fontSize: '0.6rem', color: '#8B8B8B', textDecoration: 'underline', '&:hover':{color:'black'} }}>заказать звонок</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Header