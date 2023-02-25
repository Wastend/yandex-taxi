import React from 'react'
import { Box, Typography, Button, Link } from '@mui/material'
import Vector from '../source/Vector.png'

const Footer = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#FFDF39', alignItems: 'center', justifyContent: 'center', height: '11rem', gap: '4rem' }}>
                <Typography fontWeight="bold" variant='h3'>Есть автомобиль?</Typography>
                <Button LinkComponent='a' href="#privilege" variant='h3' sx={{fontSize:'2.5rem', fontWeight:'bold'}}>
                    Работать на личном авто
                    <Box
                    component="img"
                    sx={{
                        width: '24px',
                        height: '18px',
                        ml:'3rem'
                    }}
                    alt="vector"
                    src={Vector}
                />
                    </Button>
            </Box>
            <Box sx={{ display: 'flex', backgroundColor: '#222222', alignItems: 'center', justifyContent: 'center', height: '10rem' }}>
                <Box sx={{display: 'flex',  flexDirection: 'row', position:'relative', justifyContent: 'space-between', margin: '2rem 6.5rem 1rem 6.5rem'}}>
                    <Box sx={{display:'table', width: '25rem', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize:'1.2rem', color: 'white'}}>Официальный партнер Яндекс Такси г.Омск</Typography>
                        <Typography sx={{ fontSize:'1.2rem', color: 'white', mt:'1rem' }}>ОГРНИП 12345432112344</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10rem', m: '0 0 1rem 7rem', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
                            <Link href="#startWork" sx={{ fontSize: '1.2rem', color: '#8B8B8B', textDecorationLine:'none', '&:hover':{color:'white'} }}>Начало работы</Link>
                            <Link href="#privilege" sx={{ fontSize: '1.2rem', color: '#8B8B8B', textDecorationLine:'none', '&:hover':{color:'white'} }}>Преимущество работы</Link>
                            <Link href="#reviews" sx={{ fontSize: '1.2rem', color: '#8B8B8B', textDecorationLine:'none', '&:hover':{color:'white'} }}>Отзывы</Link>
                            <Link href="#app" sx={{ fontSize: '1.2rem', color: '#8B8B8B', textDecorationLine:'none', '&:hover':{color:'white'} }}>Приложение</Link>
                            <Link href="#contacts" sx={{ fontSize: '1.2rem', color: '#8B8B8B', textDecorationLine:'none', '&:hover':{color:'white'} }}>Контакты</Link>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Link href="https://support.wix.com/ru/article/создание-политики-конфиденциальности" target="_blank" sx={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem', textDecorationLine:'none', color: 'white' }}>Политика конфиденциальности</Link>
                            
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Footer